import {NavigationProp} from '@react-navigation/native';

import {Course} from './gpsData';

export type AppStackParamList = {
  CoursesSelection: undefined;
  FollowCourse: {course: Course};
};

export type FollowCourseProps = NavigationProp<
  AppStackParamList,
  'FollowCourse'
>;

export type CoursesSelectionProps = NavigationProp<
  AppStackParamList,
  'CoursesSelection'
>;
