import {FC, useRef, useState} from 'react';
import {CompasDeHierroWrapper} from './CompasDeHierro.styled';
import {Card} from "primereact/card";
import {Toast} from "primereact/toast";
import {SelectItemThreeValuesImpl} from "./model/SelectItemThreeValues.ts";
import {ListBox} from "primereact/listbox";
import {City} from "./model/city.ts";
import {ContextMenu} from "primereact/contextmenu";
import {MenuItem} from "primereact/menuitem";
import {SelectItemGroupThreeValues} from "./model/SelectItemGroupThreeValues.ts";

interface CompasDeHierroProps {
}

const CompasDeHierro: FC<CompasDeHierroProps> = () => {
  const groupedCities: SelectItemGroupThreeValues[] = [
    {
      label: 'Argentina',
      value: 'ar',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Buenos Aires - Argentina',
          value: 'los_compas_del_hierro_arg',
          value2: false,
        }), // los_compas_de_argentina
        new SelectItemThreeValuesImpl({
          label: 'Alberti',
          value: 'loscompasdehierroalberti',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Córdoba',
          value: 'compas_de_hierro_cordoba',
          value2: true,
        }), // compas_de_hierro_arg.cordoba
        new SelectItemThreeValuesImpl({
          label: 'Córdoba',
          value: 'loscompasdehierro.cordoba',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Córdoba',
          value: 'compas.de.hierro',
          value2: false,
        }),
        // new SelectItemThreeValuesImpl({
        //   label: 'Jujuy',
        //   value: 'los_compas_de_hierro_jujuy_arg',
        //   value2: false,
        // }), // parece que no tienen sede y la cuenta desapareció
        new SelectItemThreeValuesImpl({
          label: 'Mar del plata',
          value: 'los_compas_de_hierro_mdq',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Mendoza',
          value: 'loscompasdehierro.mza.arg',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Salta',
          value: 'los_compas_de_hierro_salta',
          value2: false,
        }),
      ],
    },
    {
      label: 'Austria',
      value: 'at',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Viena',
          value: 'el_compa_de_hierro_au',
          value2: false,
        }), // no especifica lugar de entrenamiento
      ],
    },
    {
      label: 'Bélgica',
      value: 'be',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Bélgica',
          value: 'los_compas_de_hierro_belgica',
          value2: false,
        }),
      ],
    },
    {
      label: 'Bolivia',
      value: 'bo',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Cobija',
          value: 'los_compas_de_hierro_amazonics',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Cochabamba',
          value: 'compas.de.hierro.cochabamba1',
          value1: 'profile.php?id=61554942335736',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'La Paz',
          value: 'compas_de_hierro_lapaz',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'La Paz',
          value: 'compas.de.hierro.lapaz',
          value1: 'profile.php?id=61552237851069',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Tarija',
          value: 'compas_de_hierro_tja',
          value2: false,
        }), // parece que no tienen aún sede
      ],
    },
    {
      label: 'Canada',
      value: 'ca',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Toronto (Ontario)',
          value: 'compas_dehielo_toronto',
          value2: false,
        }),
      ],
    },
    {
      label: 'Chile',
      value: 'cl',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Santiago',
          value: 'compas.de.hierro.chile.oficial',
          value2: true,
        }),
      ],
    },
    {
      label: 'Colombia',
      value: 'co',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Colombia',
          value: 'los_parceros_de_hierro_col',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Armenia',
          value: 'parceros_de_hierro_armenia',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({label: 'Barranquilla', value: 'cdh_baq', value2: false}), // parece que aún no tienen sede
        new SelectItemThreeValuesImpl({
          label: 'Bogotá',
          value: 'compasdehierrobogota',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Bogotá',
          value: 'estoicos_de_hierro_bogota',
          value1: 'groups/318263317295828',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Cali',
          value: 'loscompasdehierrocali',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Manizales',
          value: 'parceros_de_hierro_manizales',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Medellín',
          value: 'compasdehierromedellin',
          value2: true,
        }), // parceros_de_hierro_medellin
        new SelectItemThreeValuesImpl({
          label: 'Medellín',
          value: 'compas_de_medellin',
          value2: false,
        }), // parece que aún no tienen sede
        new SelectItemThreeValuesImpl({
          label: 'Ocaña',
          value: 'parceros_de_hierro_ocana',
          value1: 'profile.php?id=100094286907714',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Río Negro',
          value: 'parcerosdehierro_rionegro',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Pasto',
          value: 'compas_hierro_pasto',
          value2: false,
        }), // parece que aún no tienen sede
        new SelectItemThreeValuesImpl({
          label: 'Pereira',
          value: 'compas_hierro_pasto',
          value2: false,
        }), // parece que aún no tienen sede
        new SelectItemThreeValuesImpl({
          label: 'Tunja',
          value: 'los_compas_de_hierro_tunja',
          value2: true,
        }),
      ],
    },
    {
      label: 'Costa Rica',
      value: 'cr',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Costa Rica',
          value: 'los_compas_de_hierro_costarica',
          value2: true,
        }),
      ],
    },
    {
      label: 'Dinamarca',
      value: 'dk',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Copenhagen',
          value: 'los_compas_de_hierro_dk',
          value2: false,
        }), // sin sede
      ],
    },
    {
      label: 'Ecuador',
      value: 'ec',
      items: [
        new SelectItemThreeValuesImpl({label: 'Cuenca', value: 'cdhcuenca', value2: true}),
        new SelectItemThreeValuesImpl({
          label: 'Ecuador',
          value: 'compas_de_hierro_ecuador',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Guayaquil',
          value: 'compasdehierroguayaquil',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Ibarra',
          value: 'cdh.ibarra.ecuador',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Quevedo',
          value: 'compas_de_hierro_qvdo_ecu',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Quito norte',
          value: 'lcdh.quitonorte',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Quito sur',
          value: 'cdh_quitosur',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Puyo',
          value: 'compasdehierropuyo',
          value2: true,
        }), // no tienen sede aún
      ],
    },
    {
      label: 'El Salvador',
      value: 'sv',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'El Salvador',
          value: 'los_compas_de_hierro_sv',
          value1: 'los.compas.de.hierro.sv',
          value2: true,
        }),
      ],
    },
    {
      label: 'España',
      value: 'es',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'España',
          value: 'compas_de_hierro_es',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Barcelona',
          value: 'los_compas_de_hierro_bcn',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Madrid',
          value: 'los_compas_de_hierro_madrid',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Murcia',
          value: 'los_compas_de_hierro_cartagena',
          value2: true,
        }), // aún no tienen sede registrada
      ],
    },
    {
      label: 'Francia',
      value: 'fr',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Francia',
          value: 'los_compas_de_hierro_france',
          value2: false,
        }), // no especifica lugar de entrenamiento
      ],
    },
    {
      label: 'Guatemala',
      value: 'gt',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Guatemala',
          value: 'compas_de_hierro_guatemala_ofi',
          value1: 'profile.php?id=100092460303718',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Quetzaltenango',
          value: 'compas_de_hierroquetzaltenango',
          value1: 'profile.php?id=100092460303718',
          value2: true,
        }),
      ],
    },
    {
      label: 'Honduras',
      value: 'hn',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Honduras',
          value: 'los_compas_de_hierro_honduras',
          value2: true,
        }), // los_compas_de_honduras
        new SelectItemThreeValuesImpl({
          label: 'Roatán',
          value: 'los_compas_de_hierro_hn_roatan',
          value2: true,
        }),
      ],
    },
    {
      label: 'Italia',
      value: 'it',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Italia',
          value: 'los_compas_de_hierro_ita',
          value2: true,
        }), // no especifican lugar de entrenamiento
      ],
    },
    {
      label: 'Irlanda',
      value: 'ie',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Dublín',
          value: 'los.compas.de.hierro_irlanda',
          value2: false,
        }),
      ],
    },
    {
      label: 'México',
      value: 'mx',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Aguascalientes',
          value: 'los_compas_de_hierro_ags',
          value1: 'Loscompasdehierroaguascalientes',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Agua prieta (Sonora)',
          value: 'compas_de_hierro_agua_prieta',
          value2: false,
        }), // hay ambigüedad en la ubicación de entrenamiento
        new SelectItemThreeValuesImpl({
          label: 'Atlixco (Puebla)',
          value: 'loscompas_de_hierro_atlixco',
          value2: false,
        }), // no mencionan sede
        new SelectItemThreeValuesImpl({
          label: 'Cancún (Quintana Roo)',
          value: 'los_compas_de_hierro_cancun',
          value1: 'profile.php?id=100092573765968',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Chiapas',
          value: 'los_compas_de_hierro_chiapas',
          value2: false,
        }), // aún no hay sede por lo que parece
        new SelectItemThreeValuesImpl({
          label: 'Chihuahua',
          value: 'los_compas_de_hierro_chihuahua',
          value2: true,
        }), // no especifican sede
        new SelectItemThreeValuesImpl({
          label: 'Ciudad de México (CDMX)',
          value: 'los_compas_de_hierro',
          value1: 'loscompasdehierro',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Ciudad Juárez (Chihuahua)',
          value: 'compasdehierro_cdjuarez_chi',
          value2: true,
        }), // no especifican sede
        new SelectItemThreeValuesImpl({
          label: 'Durango',
          value: 'compas_hierro_durango_mx',
          value2: false,
        }), // aún no tienen sede
        new SelectItemThreeValuesImpl({
          label: 'Guadalajara (Jalisco)',
          value: 'loscompasdehierrojalisco',
          value2: true,
        }), // no especifican sede
        new SelectItemThreeValuesImpl({
          label: 'Guadalajara (Jalisco)',
          value: 'los_compas_de_hierro_gdl',
          value1: 'profile.php?id=61557266551592',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Guadalajara (Jalisco)',
          value: 'barras_tribugdl_oficial',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Irapuato (Guanajuato)',
          value: 'los_compas_de_hierro_irapuato',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'León (Guanajuato)',
          value: 'los_compas_de_hierro_leonn',
          value2: true,
        }), // los_compas_de_hierro_leon
        new SelectItemThreeValuesImpl({
          label: 'Monterrey (Nuevo León)',
          value: 'los_compas_del_cerro',
          value1: 'profile.php?id=100090523121637',
          value2: true,
        }), // los_compas_del cerro_mty
        new SelectItemThreeValuesImpl({
          label: 'Morelia (Michoacán)',
          value: 'los_compas_de_hierro_morelia',
          value1: 'profile.php?id=61550607760712',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Nayarit',
          value: 'loscompasdehierronayarit',
          value2: true,
        }), // no especifican sede
        new SelectItemThreeValuesImpl({
          label: 'Oaxaca',
          value: 'loscompasdehierro_oaxaca',
          value2: true,
        }), // no especifican sede
        new SelectItemThreeValuesImpl({
          label: 'Querétaro',
          value: 'compas_de_hierro_queretaro',
          value2: true,
        }), // compasdehierro_qro //los_compas_de_hierro_qro
        new SelectItemThreeValuesImpl({
          label: 'Pachuca (Hidalgo)',
          value: 'lcdh_hidalgo_oficial',
          value2: true,
        }), // loscompasdehierropachuca
        new SelectItemThreeValuesImpl({
          label: 'Puebla',
          value: 'los_compas_de_hierro_puebla_',
          value2: true,
        }), // los_compas_de_hierro_puebl
        new SelectItemThreeValuesImpl({
          label: 'Puebla',
          value: 'modo_guerra_puebla',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Puerto Peñasco (Sonora)',
          value: 'los_compas_del_desierto',
          value2: true,
        }), // los_compas_del_desierto
        new SelectItemThreeValuesImpl({
          label: 'San Luis Potosí',
          value: 'compas_slp',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Tamaulipas',
          value: 'compas_de_hierro_tamaulipas',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Tampico (Tamaulipas)',
          value: 'loscompasdehierrotampico',
          value2: true,
        }), // tribu_alfa_tampico / no especifican lugar de reunión
        new SelectItemThreeValuesImpl({
          label: 'Tecate (Baja California)',
          value: 'los_compas_de_hierro_tkt',
          value2: false,
        }), // no pude hallar el lugar que especifican en comentarios
        new SelectItemThreeValuesImpl({
          label: 'Tijuana (Baja California)',
          value: 'Los_compas_de_hierro_tijuana',
          value1: 'loscompasdehierrotijuana',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Tlaxcala',
          value: 'los_compas_de_hierro_tlaxcala',
          value1: 'profile.php?id=100090918352127',
          value2: true,
        }), // los_compas_de_hierro_tlaxcal
        new SelectItemThreeValuesImpl({
          label: 'Toluca (Estado de México)',
          value: 'compas_de_hierro_toluca_',
          value1: 'profile.php?id=61557714384078',
          value2: true,
        }), // los_compas_de_hierro_toluca
        new SelectItemThreeValuesImpl({
          label: 'Torreón (Coahuila)',
          value: 'los_laguneros_de_hierro',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Tuxtla Gutiérrez (Chiapas)',
          value: 'los_compas_de_hierro_tuxtla',
          value1: 'profile.php?id=61553570339494',
          value2: true,
        }), // no especifica lugar de entrenamiento
        new SelectItemThreeValuesImpl({
          label: 'Yucatán',
          value: 'compas_de_hierro_yucatan',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Zacatecas',
          value: 'los_compas_de_hierro_zacatecas',
          value2: false,
        }),
      ],
    },
    {
      label: 'Panamá',
      value: 'pa',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Panamá',
          value: 'compasdehierropanama',
          value2: false,
        }),
      ],
    },
    {
      label: 'Paraguay',
      value: 'py',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Paraguay',
          value: 'loscompasdehierropy',
          value1: 'profile.php?id=61555469100778',
          value2: true,
        }),
      ],
    },
    {
      label: 'Perú',
      value: 'pe',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Perú',
          value: 'los_compasdehierro_peru',
          value2: false,
        }), // los_causas_del_modo_guerra
      ],
    },
    {
      label: 'Puerto Rico',
      value: 'pr',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Puerto Rico',
          value: 'los_compas_de_hierro_pr',
          value2: false,
        }), // parece que aún no tienen sede
      ],
    },
    {
      label: 'Portugal',
      value: 'pt',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Lisboa',
          value: 'los_compas_de_hierro_lisboa',
          value2: false,
        }),
      ],
    },
    {
      label: 'República Dominicana',
      value: 'do',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'República Dominicana',
          value: 'compasdehierro_rd',
          value2: false,
        }), // los_compas_de_hierro_do // parece que aún no tienen sede
      ],
    },
    {
      label: 'Uruguay',
      value: 'uy',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Uruguay',
          value: 'locompasdehierro.uruguay',
          value2: false,
        }), // los_compas_de_hierro_uruguay // no tienen sede
      ],
    },
    {
      label: 'USA',
      value: 'us',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Dallas (Texas) - USA',
          value: 'los_compas_de_hierro_usa',
          value2: true,
        }),
        new SelectItemThreeValuesImpl({
          label: 'California (California)',
          value: 'loscompasdehierrocalifornia',
          value1: 'loscompas664',
          value2: true,
        }), // no especifican sede
        new SelectItemThreeValuesImpl({
          label: 'Orange County (California)',
          value: 'compasde_hierro_orangecounty',
          value2: false,
        }), // no especifican sede
        new SelectItemThreeValuesImpl({
          label: 'Chicago (Illinois)',
          value: 'compas_de_hierro_chicago_',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Denver (Colorado)',
          value: 'los_compas_de_hierro_colorado',
          value1: 'profile.php?id=100095203422192',
          value2: true,
        }), // los_compas_de_hierro_denver //no entiendo cual es la sede oficial
        new SelectItemThreeValuesImpl({
          label: 'Houston (Texas)',
          value: 'los_compas_de_hierro.houston',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'New Jersey (New York)',
          value: 'los_compas_de_hierro_nj_ny',
          value2: true,
        }), // los_compas_de_hierro_nj
        new SelectItemThreeValuesImpl({
          label: 'Utah',
          value: 'los_compas_de_hierro_utah',
          value2: false,
        }), // no especifican su sede
      ],
    },
    {
      label: 'Venezuela',
      value: 've',
      items: [
        new SelectItemThreeValuesImpl({
          label: 'Venezuela',
          value: 'los.compas.de.hierro.vnzla',
          value2: false,
        }), // los_compas_de_hierro_venezuela
        new SelectItemThreeValuesImpl({
          label: 'Barquisimeto',
          value: 'compashierro_barquisimeto',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Caracas',
          value: 'compasdehierro.vnzla.caracas',
          value2: true,
        }), // los_compas_de_hierro_caracas
        new SelectItemThreeValuesImpl({
          label: 'Maracay',
          value: 'los_compas_de_hierro_maracay',
          value2: false,
        }),
        new SelectItemThreeValuesImpl({
          label: 'Puerto Cabello',
          value: 'compasdehierrovzla_pc',
          value2: false,
        }),
      ],
    },
  ];
  const [selectedCity, setSelectedCity] = useState<City | null>()
  const cm = useRef<ContextMenu>(null);
  const toast = useRef<Toast>(null);

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

  const groupTemplate = (option: any) => {
    return (
      <div className="flex align-items-center gap-2">
        <img alt={option.optionGroup.label} src="/flag_placeholder.png"
             className={`flag flag-${option.optionGroup.value}`}/>
        <div>{option.optionGroup.label}</div>
      </div>
    );
  };

  return (
    <CompasDeHierroWrapper>
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
              }}
              options={groupedCities}
              optionLabel="label"
              optionGroupLabel="label"
              optionGroupChildren="items"
              optionValue="label"
              className="w-full md:w-14rem"
              listStyle={{maxHeight: '250px'}}
              optionGroupTemplate={groupTemplate}
              onContextMenu={(e) => cm.current?.show(e)}
            >
            </ListBox>

          </div>
        </Card>
        <br/>

      </Card>
    </CompasDeHierroWrapper>
  );
};

export default CompasDeHierro;
