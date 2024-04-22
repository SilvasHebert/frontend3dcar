import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

export function SafeArea({children}: {children: ReactNode}) {
  return (
    <SafeAreaView
      edges={['top', 'right', 'left', 'bottom']}
      style={styles.safeArea}>
      {children}
    </SafeAreaView>
  );
}
