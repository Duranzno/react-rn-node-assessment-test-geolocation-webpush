import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { appStyles } from 'commons/styles';
import { detailStyles } from 'screens/detail/styles';
import { AppStackParamList } from 'screens/AppStackParamList.model';
import { StackScreenProps } from '@react-navigation/stack';
import {
  MappedLocation,
  Button,
  DetailedData,
  CircularButton,
} from 'components';
import { tailwind } from 'tailwind';

type Props = StackScreenProps<AppStackParamList, 'Detail'>;
export const DetailScreen: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const { location } = params;
  // navigation.setOptions({
  //   headerTitle: () => <Text>{'title'}</Text>,
  // });
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CircularButton onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </CircularButton>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={[appStyles.safeArea, tailwind('flex-1')]}>
      {/*   <CircularButton style={tailwind('absolut ml-4 mt-4')}>
        <Text>Back</Text>
      </CircularButton>
 */}
      <MappedLocation marker={location} />
      <DetailedData data={{ ...params }}>
        <Button onPress={(): void => navigation.goBack()}>
          <Text>Go back</Text>
        </Button>
      </DetailedData>
    </SafeAreaView>
  );
};
