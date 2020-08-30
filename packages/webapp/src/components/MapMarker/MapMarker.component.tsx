import React, { useState } from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { LatLng } from '@sosafe-test/common';

type Props = {
  onClick: (coord: LatLng) => void;
};

const MapComponent =withScriptjs(withGoogleMap(({onClick}: Props)=>{
  const [marker, setMarker] = useState<LatLng>()
  //@ts-ignore
  const onMapClick=(e)=>{
    setMarker(e.latLng)
    onClick(e.latLng.toJSON())
  }

  return (
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -33.4489, lng: -70.6693}}
    onClick={onMapClick}
  >
    {marker && <Marker position={marker} />}
  </GoogleMap>
  )
}))
export const MapMarker: React.FC<Props> = (p) => (
  <MapComponent 
    {...p}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
    loadingElement={ <div style={{ height: `100%` }} />}
    containerElement={ <div style={{ height: `400px` }} />}
    mapElement={ <div style={{ height: `100%` }} />}
  />
)