import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Course} from './gpsData';

export type AppStackParamList = {
  CoursesSelection: undefined;
  FollowCourse: {course: Course};
};

export type FollowCourseProps = NativeStackScreenProps<
  AppStackParamList,
  'FollowCourse'
>;
