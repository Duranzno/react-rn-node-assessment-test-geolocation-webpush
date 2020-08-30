import * as React from 'react';
import {
  DetailScreen,
  AppStackParamList,
  ListScreen,
  SosafeData,
} from 'screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainerRef } from '@react-navigation/native';

// import { SosafeData } from 'sosafe-assesment-test-shared-data';

export const navigationRef = React.createRef<
  NavigationContainerRef
>();
export function navigate(parameters: {
  name: string;
  params: { name: string };
}): void {
  const { name, params } = parameters;
  if (navigationRef.current !== null) {
    navigationRef.current.navigate(name, params);
  }
}

const AppStack = createStackNavigator<AppStackParamList>();
export const AppStackScreen: React.FC<{ list: SosafeData[] }> = ({
  list,
}) => {
  return (
    <AppStack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0,
        },
        headerTintColor: 'rgba(0, 0, 0, 0.88)',
      }}
    >
      <AppStack.Screen
        name="List"
        component={(p): React.ReactElement => {
          // console.log(list);
          return <ListScreen {...p} list={list} />;
        }}
      />
      <AppStack.Screen name="Detail" component={DetailScreen} />
    </AppStack.Navigator>
  );
};
