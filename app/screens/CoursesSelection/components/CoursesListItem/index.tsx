import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Course} from '../../../../types/gpsData';

import {CourseInfo} from './CourseInfo';
import styles from './styles';

export function CoursesListItem(course: Course, onPress: () => void) {
  const firstAddress = course.gps[0].address ?? '';
  const lastAddress = course.gps[course.gps_count - 1].address ?? '';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CourseInfo
        address={firstAddress}
        dateTime={course.start_at}
        icon={require('@assets/images/carIcon.png')}
      />
      <View style={styles.line} />
      <CourseInfo
        address={lastAddress}
        dateTime={course.end_at}
        icon={require('@assets/images/flagIcon.png')}
      />
    </TouchableOpacity>
  );
}
