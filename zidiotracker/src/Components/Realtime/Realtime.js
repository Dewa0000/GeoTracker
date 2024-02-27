import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapWithLocationTracking = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [watchId, setWatchId] = useState(null); // Store the watch identifier

  // Function to fetch the user's current location using Geolocation API
  const getUserLocation = () => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error(error.message);
        }
      );
      setWatchId(id); // Store the watch identifier
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation(); // Fetch user's location when component mounts

    // Cleanup function to stop watching for location changes when component unmounts
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId); // Clear the watch using the stored identifier
      }
    };
  }, [watchId]); // Include watchId in the dependencies array

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={userLocation || [51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {userLocation && <Marker position={userLocation}><Popup>Your location</Popup></Marker>}
      </MapContainer>
    </div>
  );
};

export default MapWithLocationTracking;
