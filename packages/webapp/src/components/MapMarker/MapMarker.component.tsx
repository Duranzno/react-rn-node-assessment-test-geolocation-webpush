import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { LatLng } from '@sosafe-test/common';

type Props = {
  onClick: (coord: LatLng) => void;
  location: LatLng;
};

const MapComponent = withScriptjs(
  withGoogleMap(({ onClick, location: l }: Props) => {
    // this is used as any as nor the library nor the underlying google maps gives out the correct data
    // TODO: implement correct typing or use another library
    const onMapClick = (e: {
      latLng: { lat: () => number; lng: () => number };
    }): void => {
      const newLocation: LatLng = {
        latitude: e.latLng.lat(),
        longitude: e.latLng.lng(),
      };
      onClick(newLocation);
    };
    React.useEffect(() => {
      // setMarker({e})
    }, [location]);
    return (
      <>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -33.4489, lng: -70.6693 }}
          onClick={onMapClick}
        >
          {location && (
            <Marker
              position={{ lat: l.latitude, longitude: l.longitude }}
            />
          )}
        </GoogleMap>
      </>
    );
  }),
);
export const MapMarker: React.FC<Props> = (p) => (
  <MapComponent
    {...p}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);
