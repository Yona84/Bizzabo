import React from "react";
import GoogleMapReact from 'google-map-react';
import { Marker } from '../styles'

const GOOGLE_API_KEY = 'AIzaSyAGnOYTY3Sl48yN1qiVVxPYymybvff3t2E';

class MapContainer extends React.Component {

  render() {
    const { lat, lng } = this.props;

    return (
      <div style={{ width: '100%', height: 300}}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLE_API_KEY,
          language: 'en'
        }}
        center={{lat:lat, lng:lng}}
        defaultZoom={15}
      >
        <Marker
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer
