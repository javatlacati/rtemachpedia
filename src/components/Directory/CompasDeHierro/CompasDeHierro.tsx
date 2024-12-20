import {FC, useEffect, useRef, useState} from 'react';
import {CompasDeHierroWrapper} from './CompasDeHierro.styled';
import {Card} from "primereact/card";
import {Toast} from "primereact/toast";
import {ListBox} from "primereact/listbox";
import {ContextMenu} from "primereact/contextmenu";
import {MenuItem} from "primereact/menuitem";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {Icon, LatLngExpression} from "leaflet";
import {CellLocation} from "../../../zustand/types/CellLocation.ts";
import {SelectItemGroupThreeValues} from "../../../zustand/types/SelectItemGroupThreeValues.ts";
import {City} from "../../../zustand/types/city.ts";
import {useTemachpediaState} from "../../../zustand/store.ts";
import axios from "axios";
import {SelectItemThreeValuesImpl} from "../../../zustand/types/SelectItemThreeValues.ts";
import {useNavigate} from "react-router-dom";

interface CompasDeHierroProps {
}

const SetViewOnClick = ({coords}: { coords: LatLngExpression }) => {
  const map = useMap();
  map.panTo(coords);

  return null;
}

const CompasDeHierro: FC<CompasDeHierroProps> = () => {
  const {token} = useTemachpediaState((state) => state.auth);
  const groupedCities: SelectItemGroupThreeValues[] = useTemachpediaState((state) => state.groupedCities);
  const setGroupedCities = useTemachpediaState((state) => state.setGroupedCities);

  const locations: CellLocation[] = useTemachpediaState((state) => state.locations);
  const setLocations = useTemachpediaState((state) => state.setLocations);
  const [selectedCity, setSelectedCity] = useState<City | null>()
  const cm = useRef<ContextMenu>(null);
  const toast = useRef<Toast>(null);
  const [centeredPoint, setCenteredPoint] = useState<LatLngExpression>([19.456492, -99.1636326]);
  const [loading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost/api/grouped_cities', {headers: {'Authorization': 'Bearer ' + token}}).then(response => {
      const cities: SelectItemGroupThreeValues[] = response.data;
      if (cities && cities.length > 0) {
        setGroupedCities(cities);
      }
    }).then(() => {
      axios.get('http://localhost/api/cell_locations', {headers: {'Authorization': 'Bearer ' + token}}).then(response => {
        const cellLocations: CellLocation[] = response.data;
        if (cellLocations && cellLocations.length > 0) {
          setLocations(cellLocations);
        }
      }).then(() => setIsLoading(false));
    }).catch(error => {
      if (error.response && error.response.status === 401) {
        // Token expired, remove it from localstorage and prompt user to log in again
        localStorage.removeItem('token');
        localStorage.setItem('name', 'invitado');
        alert('Su sesión ha expirado. Por favor, inicie sesión de nuevo.');
        // Redirect user to the login page or prompt for login credentials
        handleNavigateToURL('/');
      } else {
        console.log(error);
        alert('Hubo un error en la carga de datos del usuario. Por favor intente nuevamente.');
      }
    })
  }, [])

  const redes: MenuItem[] = [
    {
      label: 'ig',
      command: () => {
        abreIgCompas();
      },
    },
    {
      label: 'fb',
      command: () => {
        abreFbCompas();
      },
    },
  ];

  const abreIgCompas = () => {
    console.log(selectedCity);
    const url = `https://www.instagram.com/${selectedCity?.value}`;
    window.open(url, '_blank');
  }

  const abreFbCompas = () => {
    if (selectedCity?.value1 != null) {
      const url = `https://www.facebook.com/${selectedCity?.value1}`;
      window.open(url, '_blank');
    } else {
      toast.current?.show({
        severity: 'info',
        summary: 'Información',
        detail: 'La cuenta seleccionada no tiene ninguna cuenta conocida de facebook de momento',
      });
    }
  }


  const voc = (<SetViewOnClick
    coords={centeredPoint}
  />)

  /**
   * Shows the location of the selected city.
   * The instagram account of the LCDH cell is considered as the cell name.
   * The first location associated with the LCDH cell is considered as the main and therefore shown.
   */
  const muestraUbicacion = () => {
    const latlng: LatLngExpression | undefined = locations.find(
      (cellLocation) => cellLocation.cell_name === selectedCity?.value,
    )?.cell_details[0].lat_lng_expression;
    if (latlng) {
      setCenteredPoint(latlng)
    } else {
      console.warn('La célula de los compas de hierro no tiene sede aún');
    }
  }

  const itemTemplate = (option: SelectItemThreeValuesImpl) => {
    return (
      <div className="flex align-items-center gap-2">
        <div>{option.value2 ? `${option.label} ✓` : option.label}</div>
      </div>
    );
  }

  const groupTemplate = (option: any) => {
    return (
      <div className="flex align-items-center gap-2">
        <img alt={option.optionGroup.label} src="/flag_placeholder.png"
             className={`flag flag-${option.optionGroup.value}`}/>
        <div>{option.optionGroup.label}</div>
      </div>
    );
  };


  return <CompasDeHierroWrapper>
    <Card header="Compas de Hierro"
          subTitle="Los compas de hierro es una comunidad liderada por varones cuyos valores son la fortaleza y la hermandad.">
      <Toast ref={toast}/>
      <blockquote>
        Necesitamos gente de nuestra edad para convivir, necesitamos convivir con gente de nuestra edad
        para motivarnos, para impulsarnos para exigirnos. Necesitamos ayudar a la comunidad, necesitamos
        recibir, y necesitamos darle.<br/>
        Gente más joven que yo que necesita que le enseñe, que necesita que la guíe con lo que yo sé
        hacer, y si no la puedo ayudar entonces la canalizo, si yo no puedo resolver el problema lo
        canalizo porque sé con quién dentro de la comunidad, para eso son los compas de hierro. Mi sueño
        es poder generar una comunidad que se sostenga a sí misma - El Temach
      </blockquote>
      <br/>
      <Card header="Cuentas oficiales" subTitle="Las cuentas verificadas aparecen con el símbolo ✓">
        <div className="card flex justify-content-center">
          <ContextMenu ref={cm} model={redes} breakpoint="767px"/>
          <ListBox
            value={selectedCity} filter
            onChange={(e) => {
              const aCity = groupedCities.flatMap(group => group.items).find(value => value.label == e.value) as SelectItemThreeValuesImpl | null;
              if (aCity)
                setSelectedCity(aCity);
              muestraUbicacion()
            }}
            options={groupedCities}
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
            optionValue="label"
            className="w-full md:w-14rem"
            listStyle={{maxHeight: '250px'}}
            optionGroupTemplate={groupTemplate}
            itemTemplate={itemTemplate}
            onContextMenu={(e) => cm.current?.show(e)}
            disabled={loading}
          >
          </ListBox>

        </div>
      </Card>
      <br/>
      <Card header="Sedes de entrenamiento">
        <MapContainer center={[19.456492, -99.1636326]} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations?.map((location) => {
            let fb: string | undefined;
            for (const group of groupedCities) {
              for (const item of group.items) {
                if (item.value === location.cell_name) {
                  fb = item.value1;
                  break;
                }
              }
            }
            return location?.cell_details?.map((detail) => {
              const myIcon = new Icon({
                iconUrl: '/marker-icon.png',
                iconRetinaUrl: '/marker-icon-2x.png',
                iconSize: [45, 60]
              })
              return <Marker key={`${location.cell_name}-${detail.label[0] || ''}`} position={detail.lat_lng_expression}
                             icon={myIcon}>
                <Popup>
                  <div className="flex flex-col gap-2">
                    <div className="font-bold">{detail.label}</div>
                    <div>{detail.street}</div>
                    <div>
                      <a href={`https://www.instagram.com/${location.cell_name}`} target="_blank">
                        <span className="pi pi-instagram"/>
                      </a>
                      {fb && (
                        <>
                          &nbsp;<a href={`https://www.facebook.com/${fb}`} target="_blank">
                          <span className="pi pi-facebook"/>
                        </a>
                        </>
                      )}
                    </div>
                  </div>
                </Popup>
              </Marker>;
            })
          })}
          {voc}
        </MapContainer>
      </Card>
    </Card>
  </CompasDeHierroWrapper>;
};

export default CompasDeHierro;
