import * as React from 'react';
import { DetailScreen, AppStackParamList, ListScreen } from 'screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainerRef } from '@react-navigation/native';

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
export const AppStackScreen: React.FC = () => {
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
      <AppStack.Screen name="List" component={ListScreen} />
      <AppStack.Screen name="Detail" component={DetailScreen} />
    </AppStack.Navigator>
  );
};
