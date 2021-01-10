import React from "react";
import GoogleMapReact from "google-map-react";
import  CarComponent from "./CarComponent";

const GOOGLE_API_KEY = "AIzaSyAXcilN2uZtiBse26MXztgZP81lFyklmuA";


const MapContainer = ({ driversData }) => {
  return (
    <div style={{ width: "100vw", height: 817 }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
        center={{ lat: 31, lng: 31 }}
        defaultZoom={14}
      >
        {
          driversData.map(point => {
        return (
        <CarComponent
        key={point._id}
        lat={point.latitude}
        lng={point.longitude}
        isHovered={point.isHovered}/>
        );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
