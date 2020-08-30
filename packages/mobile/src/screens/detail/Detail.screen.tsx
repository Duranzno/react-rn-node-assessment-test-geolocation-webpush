import React, { useRef, useEffect } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { appStyles } from 'commons/styles';
import { detailStyles } from 'screens/detail/styles';
import { AppStackParamList } from 'screens/AppStackParamList.model';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { Marker } from 'react-native-maps';

type Props = StackScreenProps<AppStackParamList, 'Detail'>;
export const DetailScreen: React.FC<Props> = ({
  navigation,
  route,
}) => {
  // console.log(param)
  const { params } = route;
  const { location, filters, name, scores } = params;
  // navigation.setOptions({
  //   headerTitle: () => <Text>{'title'}</Text>,
  // });
  React.useEffect(() => {
    console.log(params);
    console.log({
      location,
      filters,
      name,
      scores,
    });
  }, [filters, location, name, params, scores]);

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <Text style={[detailStyles.cardText, detailStyles.title]}>
        Hello Details screen
      </Text>
      <Text style={[detailStyles.cardText, detailStyles.title]}>
        {JSON.stringify(params)}
      </Text>

      <Button
        onPress={(): void => {
          navigation.goBack();
        }}
        title="go back"
      />
      <MapView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1 }}
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
