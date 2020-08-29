import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { appStyles } from 'commons/styles';
import { detailStyles } from 'screens/detail/styles';

import { AppStackParamList } from 'screens/AppStackParamList.model';
import { StackScreenProps } from '@react-navigation/stack';
type Props = StackScreenProps<AppStackParamList, 'Home'>;
export const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={appStyles.safeArea}>
      <Text style={[detailStyles.cardText, detailStyles.title]}>
        Hello Main screen
      </Text>
    </SafeAreaView>
  );
};
