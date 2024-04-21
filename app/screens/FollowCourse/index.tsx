import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, Image, View} from 'react-native';
import MapView, {MapMarker, Marker, Polyline} from 'react-native-maps';
import {
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Coord} from '@app/types/gpsData';
import {Button} from '@components/Button';
import colors from '@consts/colors';

import {FollowCourseProps} from '../../types/routes';

import styles from './styles';

const screen = Dimensions.get('window');

export function FollowCourse({route}: FollowCourseProps) {
  const {t} = useTranslation();

  const course = route.params.course.gps;
  const courseLength = course.length;

  const ASPECT_RATIO = screen.width / screen.height;

  const firstLatitude = course[0].latitude;
  const firstLongitude = course[0].longitude;
  const lastLatitude = course[courseLength - 1].latitude;
  const lastLongitude = course[courseLength - 1].longitude;

  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const markerRef = useRef<MapMarker>(null);
  const mapViewRef = useRef<MapView>(null);

  const coordValue = useSharedValue({
    latitude: firstLatitude,
    longitude: firstLongitude,
  });

  const [carLeftDirection, setCarLeftDirection] = useState(-96);
  const [courseStatus, setCourseStatus] = useState<
    'finished' | 'coursing' | 'notStarted'
  >('notStarted');

  const carDirections = {
    forward: -96,
    forwardRight: -128,
    right: -164,
    backRight: -196,
    back: -222,
    backLeft: 0,
    left: -32,
    forwardLeft: -64,
  };

  const resetCourse = () => {
    const initCoord = {latitude: firstLatitude, longitude: firstLongitude};

    updateMapViewPostition(initCoord, 1000);
    animateMarkerPosition(initCoord, 1000);
    coordValue.value = initCoord;
    setCourseStatus('notStarted');
  };

  const animateMarkerPosition = (coord: Coord, duration: number) => {
    coordValue.value = withTiming(coord, {duration: duration});
  };

  const updateMapViewPostition = (coord: Coord, duration: number) => {
    if (mapViewRef && mapViewRef.current) {
      mapViewRef.current.animateToRegion(
        {
          latitude: coord.latitude,
          longitude: coord.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        duration,
      );
    }
  };

  const updateMarkerPosition = (lat: number, lng: number) => {
    if (markerRef && markerRef.current) {
      markerRef.current.setNativeProps({
        coordinate: {latitude: lat, longitude: lng},
      });
    }
  };

  const moveCarToDestination = (index: number, length: number) => {
    if (index === null || index === length) {
      setCourseStatus('finished');
      return;
    }

    setCourseStatus('coursing');

    const coord = course[index];
    const duration = coord.speed > 0 ? 100000 / coord.speed : 100;

    animateMarkerPosition(coord, duration);
    updateMapViewPostition(coord, duration);

    setTimeout(() => {
      if (coord.direction >= 335 || coord.direction < 20) {
        setCarLeftDirection(carDirections.forward);
      } else if (coord.direction >= 20 && coord.direction < 65) {
        setCarLeftDirection(carDirections.forwardRight);
      } else if (coord.direction >= 65 && coord.direction < 110) {
        setCarLeftDirection(carDirections.right);
      } else if (coord.direction >= 110 && coord.direction < 155) {
        setCarLeftDirection(carDirections.backRight);
      } else if (coord.direction >= 155 && coord.direction < 200) {
        setCarLeftDirection(carDirections.back);
      } else if (coord.direction >= 200 && coord.direction < 245) {
        setCarLeftDirection(carDirections.backLeft);
      } else if (coord.direction >= 245 && coord.direction < 290) {
        setCarLeftDirection(carDirections.left);
      } else if (coord.direction >= 290 && coord.direction < 335) {
        setCarLeftDirection(carDirections.forwardLeft);
      }

      moveCarToDestination(index + 1, length);
    }, duration);
  };

  useDerivedValue(() => {
    if (coordValue.value) {
      runOnJS(updateMarkerPosition)(
        coordValue.value.latitude,
        coordValue.value.longitude,
      );
    }
  }, [coordValue]);

  useEffect(() => {
    if (courseStatus === 'notStarted') {
      resetCourse();
    }
  }, [courseStatus]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        initialRegion={{
          latitude: firstLatitude,
          longitude: firstLongitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker
          coordinate={{
            latitude: firstLatitude,
            longitude: firstLongitude,
          }}>
          <View style={styles.iconContainer}>
            <Image
              source={require('@assets/images/carIcon.png')}
              style={styles.icon}
            />
          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: lastLatitude,
            longitude: lastLongitude,
          }}>
          <View style={styles.iconContainer}>
            <Image
              source={require('@assets/images/flagIcon.png')}
              style={styles.icon}
            />
          </View>
        </Marker>

        <Marker
          ref={markerRef}
          coordinate={{
            latitude: firstLatitude,
            longitude: firstLongitude,
          }}>
          <View style={styles.markerContainer}>
            <Image
              source={require('@assets/images/vehiclesSprite.png')}
              style={[styles.image, {left: carLeftDirection}]}
            />
          </View>
        </Marker>

        <Polyline
          coordinates={course}
          strokeWidth={3}
          strokeColor={colors.primary}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() =>
            courseStatus === 'finished'
              ? resetCourse()
              : moveCarToDestination(0, courseLength)
          }
          disabled={courseStatus === 'coursing'}>
          {courseStatus === 'finished'
            ? t('FinishedCourseButton')
            : t('FollowCourseButton')}
        </Button>
      </View>
    </View>
  );
}
