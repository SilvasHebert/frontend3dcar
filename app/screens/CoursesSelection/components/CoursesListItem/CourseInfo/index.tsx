import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import i18n from 'i18next';

import styles from './styles';

export function CourseInfo({
  address,
  dateTime,
  icon,
}: {
  address: string;
  dateTime: string;
  icon: ImageSourcePropType;
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text} numberOfLines={2}>
          {address}
        </Text>
        <Text style={styles.dateTime}>
          {new Date(dateTime).toLocaleDateString(i18n.language, {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    </View>
  );
}
