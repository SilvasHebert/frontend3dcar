import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CoursesSelection} from '../screens/CoursesSelection';
import {FollowCourse} from '../screens/FollowCourse';
import {AppStackParamList} from '../types/routes';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CoursesSelection"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name="CoursesSelection" component={CoursesSelection} />
        <Stack.Screen name="FollowCourse" component={FollowCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
