import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { appStyles } from 'commons/styles';
import {
  AppStackParamList,
  SosafeData,
} from 'screens/AppStackParamList.model';
import { StackScreenProps } from '@react-navigation/stack';
import tailwind from 'tailwind-rn';
import { useAppContext } from 'providers';

type Props = StackScreenProps<AppStackParamList, 'List'>;
export const ListScreen: React.FC<Props> = ({ navigation }) => {
  // navigation.setOptions({
  //   headerTitle: () => <Text>{'title'}</Text>,
  // });
  const {
    state: { list },
  } = useAppContext();
  const goToDetails = (data: SosafeData): void =>
    navigation.navigate('Detail', data);
  return (
    <SafeAreaView style={appStyles.safeArea}>
      <View style={tailwind('pt-12 items-center')}>
        <Text style={tailwind('text-blue-800 font-semibold')}>
          {JSON.stringify(list || { hey: 'hey' })}
        </Text>
        <Button
          title="Go to details"
          onPress={(): void => goToDetails(list[0])}
        />
        {list.map((v) => {
          <View>
            <Button
              title="Go to details"
              onPress={(): void => goToDetails(v)}
            />
            <Text style={tailwind('text-blue-800 font-semibold')}>
              {JSON.stringify(v)}
            </Text>
          </View>;
        })}
      </View>
    </SafeAreaView>
  );
};