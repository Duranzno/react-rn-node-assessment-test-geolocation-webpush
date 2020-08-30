import React, { useRef, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { appStyles } from 'commons/styles';
import { detailStyles } from 'screens/detail/styles';
import { AppStackParamList } from 'screens/AppStackParamList.model';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { Marker } from 'react-native-maps';

type Props = StackScreenProps<AppStackParamList, 'Detail'>;
export const DetailScreen: React.FC<Props> = ({ navigation }) => {
  // console.log(param)
  navigation.setOptions({
    headerTitle: () => <Text>{'title'}</Text>,
  });
  const _map = useRef<MapView>(null);

  useEffect(() => {
    if (_map.current) {
      _map.current.animateCamera(
        {
          center: {
            latitude: 50.1109221,
            longitude: 8.6821267,
          },
          zoom: 15,
        },
        { duration: 5000 },
      );
    }
  }, []);

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <Text style={[detailStyles.cardText, detailStyles.title]}>
        Hello Details screen
      </Text>
      <MapView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1 }}
        ref={_map}
        initialRegion={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{ latitude: 52.5200066, longitude: 13.404954 }}
        />
      </MapView>
    </SafeAreaView>
  );
};
