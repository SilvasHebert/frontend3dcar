import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './app/routes/AppStack';

export function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
