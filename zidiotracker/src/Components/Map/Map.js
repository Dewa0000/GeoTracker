import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ center, zoom }) => {
  return (
    <div style={{ height: '400px', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
