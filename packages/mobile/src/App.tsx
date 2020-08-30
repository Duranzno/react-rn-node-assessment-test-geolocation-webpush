// import 'react-native-gesture-handler';
// import React, { useState, useEffect, ReactElement } from 'react';
// import { StatusBar, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { AppStackScreen, navigationRef } from 'Navigation';
// import MapView from 'react-native-maps';

// import tailwind from 'tailwind-rn';
// import { PusherContainer } from 'container/pusher.container';
// import {
//   useChannel,
//   useEvent,
// } from '@harelpls/use-pusher/react-native';
// // import {
// //   pusherConfig,
// //   SosafeData,
// // } from 'sosafe-assesment-test-shared-data';

// const App: React.FC = () => {
//   // const channel = useChannel('sosafe-data-channel');
//   // const [_messages, setMessages] = useState<{ name: string }[]>([]);

//   // useEffect(() => {
//   //   console.log(_messages);
//   // }, [_messages]);

//   // useEvent<{ name: string }>(channel, 'sosafe-data-event', (data) => {
//   //   console.log(data);
//   //   if (data) {
//   //     setMessages((messages) => [...messages, data]);
//   //   }
//   // });

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       {/* <NavigationContainer ref={navigationRef}> */}
//       {/* <AppStackScreen /> */}
//       {/* <Text>{_messages}</Text> */}
//       <View style={tailwind('pt-12 items-center')}>
//         <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
//           <Text style={tailwind('text-blue-800 font-semibold')}>
//             Hello Tailwind
//           </Text>
//         </View>
//       </View>
//       {/* </NavigationContainer> */}
//     </>
//   );
// };

// export default (): ReactElement => {
//   return (
//     // <PusherContainer>
//     <App />
//     // </PusherContainer>
//   );
// };
import React, { useRef, useEffect } from 'react';

import MapView, { Marker } from 'react-native-maps';

// ...

const App: React.FC = () => {
  const _map = useRef<MapView>(null);

  useEffect(() => {
    if (_map.current) {
      _map.current.animateCamera(
        {
          center: {
            latitude: 50.1109221,
            longitude: 8.6821267,
          },
          zoom: 15,
        },
        { duration: 5000 },
      );
    }
  }, []);
  return (
    <>
      <MapView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1 }}
        ref={_map}
        initialRegion={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{ latitude: 52.5200066, longitude: 13.404954 }}
        />
      </MapView>
    </>
  );
};

export default App;
