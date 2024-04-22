import React, {useMemo, useState} from 'react';
import {Image, View} from 'react-native';

import styles from './styles';

export function VehiclesSprite({direction}: {direction: number}) {
  const carDirections = useMemo(() => {
    return {
      forward: -96,
      forwardRight: -128,
      right: -164,
      backRight: -196,
      back: -222,
      backLeft: 0,
      left: -32,
      forwardLeft: -64,
    };
  }, []);

  const [carLeftDirection, setCarLeftDirection] = useState(
    carDirections.forward,
  );

  useMemo(() => {
    if (direction >= 335 || direction < 20) {
      setCarLeftDirection(carDirections.forward);
    } else if (direction >= 20 && direction < 65) {
      setCarLeftDirection(carDirections.forwardRight);
    } else if (direction >= 65 && direction < 110) {
      setCarLeftDirection(carDirections.right);
    } else if (direction >= 110 && direction < 155) {
      setCarLeftDirection(carDirections.backRight);
    } else if (direction >= 155 && direction < 200) {
      setCarLeftDirection(carDirections.back);
    } else if (direction >= 200 && direction < 245) {
      setCarLeftDirection(carDirections.backLeft);
    } else if (direction >= 245 && direction < 290) {
      setCarLeftDirection(carDirections.left);
    } else if (direction >= 290 && direction < 335) {
      setCarLeftDirection(carDirections.forwardLeft);
    }
  }, [direction, carDirections]);

  return (
    <View style={styles.markerContainer}>
      <Image
        source={require('@assets/images/vehiclesSprite.png')}
        style={[styles.image, {left: carLeftDirection}]}
      />
    </View>
  );
}
