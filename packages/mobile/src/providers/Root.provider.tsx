import React from 'react';
import { PusherProvider } from './Pusher.provider';
import { AppProvider } from './App.provider';

export const RootProvider: React.FC = ({ children }) => {
  return (
    <PusherProvider>
      <AppProvider>{children}</AppProvider>
    </PusherProvider>
  );
};
