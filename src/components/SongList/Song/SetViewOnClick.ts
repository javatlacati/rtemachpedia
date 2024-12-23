import {LatLngExpression} from "leaflet";
import {useMap} from "react-leaflet";

const SetViewOnClick = ({coords}: { coords: LatLngExpression }) => {
  const map = useMap();
  map.panTo(coords);

  return null;
}
export default SetViewOnClick;