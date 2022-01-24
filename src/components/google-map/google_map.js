import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import react from 'react';
import "./google_maps.scss";

class MapContainer extends Component {
    render() {
      return (
        <Map
          google= {this.props.google}
          style = {{width: "100%" , height: "100%"}}
          zoom = {10}
          initialCenter = {
            {
              lat:55.835245,
              lng:49.149722
            }
          }
        />
      );
    }
  }



export default GoogleApiWrapper({
  apiKey:"AIzaSyBdSBXqvhFRA-yhd-Jetu5_SrKm6STVAG0"
})

