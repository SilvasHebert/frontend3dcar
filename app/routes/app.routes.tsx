import React from 'react';
import colors from '@consts/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import 'react-native-gesture-handler';

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
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="CoursesSelection"
          component={CoursesSelection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FollowCourse"
          component={FollowCourse}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
