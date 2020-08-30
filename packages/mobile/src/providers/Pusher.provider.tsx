import React from 'react';
import { PusherProvider as RealPusherProvider } from '@harelpls/use-pusher/react-native';
const pusherConfig = {
  appId: '1063660',
  key: '605ff04b821c4a21d109',
  secret: '574d241f013461101120',
  cluster: 'us2',
};
const config = {
  clientKey: pusherConfig.key,
  cluster: pusherConfig.cluster,
  activityTimeout: 6000,
};

// Wrap app in provider
export const PusherProvider: React.FunctionComponent = ({
  children,
}) => <RealPusherProvider {...config}>{children}</RealPusherProvider>;
