import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CoursesSelection} from '../screens/CoursesSelection';
import {FollowCourse} from '../screens/FollowCourse';
import {AppStackParamList} from '../types/routes';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CoursesSelection">
        <Stack.Screen name="CoursesSelection" component={CoursesSelection} />
        <Stack.Screen name="FollowCourse" component={FollowCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
