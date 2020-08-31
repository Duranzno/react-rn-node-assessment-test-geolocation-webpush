import React from 'react';
import { LatLng } from 'common';
import MapView, { Marker } from 'react-native-maps';
import tailwind from 'tailwind-rn';

interface Props {
  marker: LatLng;
}
export const MappedLocation: React.FC<Props> = ({
  marker: { latitude, longitude },
}) => {
  const style = tailwind('flex-1');
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: -33.4489,
        longitude: -70.6693,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }}
    >
      {latitude && longitude && (
        <Marker coordinate={{ latitude, longitude }} />
      )}
    </MapView>
  );
};
