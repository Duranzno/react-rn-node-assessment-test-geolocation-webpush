import React from 'react';
import { PusherProvider } from '@harelpls/use-pusher/react-native';
const pusherConfig = {
  appId: '1063660',
  key: '605ff04b821c4a21d109',
  secret: '574d241f013461101120',
  cluster: 'us2',
};
const config = {
  // required config props
  clientKey: pusherConfig.key,
  cluster: pusherConfig.cluster,

  // optional if you'd like to trigger events. BYO endpoint.
  // see "Trigger Server" below for more info
  // triggerEndpoint: '/pusher/trigger',

  // required for private/presence channels
  // also sends auth headers to trigger endpoint
  // authEndpoint: '/pusher/auth',
  // auth: {
  //   headers: { Authorization: 'Bearer token' },
  // },
};

// Wrap app in provider
export const PusherContainer: React.FunctionComponent = ({
  children,
}) => <PusherProvider {...config}>{children}</PusherProvider>;
