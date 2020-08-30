import React from 'react';

import Splash from 'react-native-splash-screen';

export class SplashScreen extends React.Component {
  componentDidMount(): void {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    Splash.show();
  }
}
