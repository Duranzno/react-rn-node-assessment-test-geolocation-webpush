import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackScreen, navigationRef } from 'Navigation';
import {
  useChannel,
  useEvent,
} from '@harelpls/use-pusher/react-native';
import SplashScreen from 'react-native-splash-screen';
import { RootProvider } from 'providers/Root.provider';
import { useAppContext } from 'providers';
import { SosafeData } from '@sosafe-test/common';

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
