import React from 'react';
// import env from 'react-native-dotenv';

import { PusherProvider as RealPusherProvider } from '@harelpls/use-pusher/react-native';
const config = {
  clientKey: '605ff04b821c4a21d109',
  cluster: 'us2',
  activityTimeout: 6000,
};
// Wrap app in provider
export const PusherProvider: React.FunctionComponent = ({
  children,
}) => {
  return (
    <RealPusherProvider {...config}>{children}</RealPusherProvider>
  );
};
