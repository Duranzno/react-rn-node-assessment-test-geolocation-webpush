import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { appStyles } from 'commons/styles';
import { detailStyles } from './styles';
import { AppStackParamList } from 'screens/AppStackParamList.model';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<AppStackParamList, 'List'>;
export const ListScreen: React.FC<Props> = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: () => <Text>{'title'}</Text>,
  });

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <Text style={[detailStyles.cardText, detailStyles.title]}>
        Hello Details screen
      </Text>
    </SafeAreaView>
  );
};
