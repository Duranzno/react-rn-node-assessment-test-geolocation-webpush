import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { DetailScreen, AppStackParamList, HomeScreen } from 'screens';
import { NavigationContainerRef } from '@react-navigation/native';
import { SosafeData } from 'common';
export const navigationRef = React.createRef<
  NavigationContainerRef
>();
export function navigate(parameters: {
  name: string;
  params: SosafeData;
}): void {
  const { name, params } = parameters;
  if (navigationRef.current !== null) {
    navigationRef.current.navigate(name, params);
  }
}
const AppStack = createStackNavigator<AppStackParamList>();
export const AppStackScreen: React.FC = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0,
        },
        headerTintColor: 'rgba(0, 0, 0, 0.88)',
      }}
    >
      <AppStack.Screen
        name="Home"
        component={HomeScreen}
        options={{}}
      />
      <AppStack.Screen
        name="List"
        component={ListScreem}
        options={{}}
      />
      <AppStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{}}
      />
    </AppStack.Navigator>
  );
};
