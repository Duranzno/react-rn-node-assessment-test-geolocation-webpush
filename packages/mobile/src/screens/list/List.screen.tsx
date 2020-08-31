import React from 'react';
import tailwind from 'tailwind-rn';
import { SafeAreaView, View } from 'react-native';
import { appStyles } from 'commons/styles';
import { AppStackParamList } from 'screens/AppStackParamList.model';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppContext } from 'providers';
import { SosafeData } from 'common';
import { ListDataRow } from 'components';

type Props = StackScreenProps<AppStackParamList, 'List'>;
export const ListScreen: React.FC<Props> = ({ navigation }) => {
  const {
    state: { list },
  } = useAppContext();
  const goToDetails = (data: SosafeData): void =>
    navigation.navigate('Detail', data);

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <View>
        {list.map((v, i) => (
          <View
            key={v.name + i}
            style={tailwind('pt-8 px-4 flex flex items-stretch ')}
          >
            <ListDataRow data={v} goToDetails={goToDetails} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
