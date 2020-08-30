import 'react-native-gesture-handler';
import React, { useState, useEffect, ReactElement } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackScreen, navigationRef } from 'Navigation';
import MapView from 'react-native-maps';

import tailwind from 'tailwind-rn';
import { PusherContainer } from 'container/pusher.container';
import {
  useChannel,
  useEvent,
} from '@harelpls/use-pusher/react-native';
import SplashScreen from 'react-native-splash-screen';

// import {
//   pusherConfig,
//   SosafeData,
// } from 'sosafe-assesment-test-shared-data';

const App: React.FC = () => {
  // const channel = useChannel('sosafe-data-channel');
  // const [_messages, setMessages] = useState<{ name: string }[]>([]);

  // useEffect(() => {
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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <NavigationContainer ref={navigationRef}> */}
      {/* <AppStackScreen /> */}
      {/* <Text>{_messages}</Text> */}
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Hello Tailwind
          </Text>
        </View>
      </View>
      {/* </NavigationContainer> */}
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
