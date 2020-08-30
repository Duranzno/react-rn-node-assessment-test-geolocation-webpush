import 'react-native-gesture-handler';
import React, { useState, useEffect, ReactElement } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackScreen, navigationRef } from 'Navigation';
import MapView from 'react-native-maps';

import { PusherContainer } from 'container/pusher.container';
import {
  useChannel,
  useEvent,
} from '@harelpls/use-pusher/react-native';
import SplashScreen from 'react-native-splash-screen';
import { SosafeData } from 'screens';

// import {
//   pusherConfig,
//   SosafeData,
// } from 'sosafe-assesment-test-shared-data';
export const SosafeDataTemplate:SosafeData = {
  name: 'First Piece of Data Sent',
  filters: ['A', 'B', 'C'],
  scores: [1, 2, 3],
  location: {
    latitude: 52.5200066,
    longitude: 13.404954,
  },
};

const App: React.FC = () => {
  // const channel = useChannel('sosafe-data-channel');
  const [_messages, setMessages] = useState([SosafeDataTemplate]);

  // useEffect(()rea => {
  //   console.log(_messages);
  // }, [_messages]);

  // useEvent<{ name: string }>(channel, 'sosafe-data-event', (data) => {
  //   console.log(data);
  //   if (data) {
  //     setMessages((messages) => [...messages, data]);
  //   }
  // });
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    // console.log(_messages);
  }, [_messages]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <AppStackScreen list={_messages} />
      </NavigationContainer>
    </>
  );
};

export default (): ReactElement => {
  return (
    // <PusherContainer>
    <App />
    // </PusherContainer>
  );
};
