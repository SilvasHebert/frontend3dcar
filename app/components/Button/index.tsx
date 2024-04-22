import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './styles';

type ButtonProps = TouchableOpacityProps & {
  onPress?: () => void;
  children: string;
};

export function Button({children, onPress, ...props}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={props.disabled ? styles.buttonDisabled : styles.button}
      {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
