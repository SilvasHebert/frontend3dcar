import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import './app/configs/i18n';

import {AppRoutes} from './app/routes/app.routes';

export function App() {
  return (
    <SafeAreaProvider>
      <AppRoutes />
    </SafeAreaProvider>
  );
}
