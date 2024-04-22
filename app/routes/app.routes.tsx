import React from 'react';
import {StatusBar} from 'react-native';
import {SafeArea} from '@app/components/SafeArea';
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
    <SafeArea>
      <StatusBar backgroundColor={colors.card} barStyle={'light-content'} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CoursesSelection"
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerTitle: '',
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
          <Stack.Screen name="FollowCourse" component={FollowCourse} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeArea>
  );
}
