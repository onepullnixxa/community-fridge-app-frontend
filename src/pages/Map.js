import React, { useState } from 'react';
import ReactMapGL, {GeolocateControl} from 'react-map-gl';

const MAPBOX_TOKEN = `${process.env.REACT_APP_MAPBOX_TOKEN}`;

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: 96,
    zoom: 3,
    bearing: 0,
    pitch: 0,
    width: "75vw",
    height: "75vh",
    borderradius: "5px",
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
      />
    </ReactMapGL>
  );
}

export default Map