import 'react-native-gesture-handler';
import React, { useState, useEffect, ReactElement } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackScreen, navigationRef } from 'Navigation';
import MapView from 'react-native-maps';

import { PusherContainer } from 'providers/Pusher.provider';
import {
  useChannel,
  useEvent,
} from '@harelpls/use-pusher/react-native';
import SplashScreen from 'react-native-splash-screen';
import { SosafeData } from 'screens';
import { RootProvider } from 'providers/Root.provider';
import { useAppContext } from 'providers';

// import {
//   pusherConfig,
//   SosafeData,
// } from 'sosafe-assesment-test-shared-data';
export const SosafeDataTemplate: SosafeData = {
  name: 'First Piece of Data Sent',
  filters: ['A', 'B', 'C'],
  scores: [1, 2, 3],
  location: {
    latitude: 52.5200066,
    longitude: 13.404954,
  },
};

const App: React.FC = () => {
  const { addMessage } = useAppContext();
  const channel = useChannel('sosafe-data-channel');
  useEvent<SosafeData>(channel, 'sosafe-data-event', (data): void => {
    if (data) {
      addMessage(data);
    }
  });
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <AppStackScreen />
      </NavigationContainer>
    </>
  );
};

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
