import React, {useRef, useState} from 'react';
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

import {VehiclesSprite} from './components/VehiclesSprite';
import styles from './styles';

const screen = Dimensions.get('window');

export function FollowCourse({route}: FollowCourseProps) {
  const {t} = useTranslation();

  const COURSE = route.params.course.gps;
  const COURSE_LEN = COURSE.length;

  const ASPECT_RATIO = screen.width / screen.height;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const FIRST_LAT = COURSE[0].latitude;
  const FIRST_LONG = COURSE[0].longitude;
  const LAST_LAT = COURSE[COURSE_LEN - 1].latitude;
  const LAST_LONG = COURSE[COURSE_LEN - 1].longitude;

  const BASE_CAR_SPEED = 100000;

  const markerRef = useRef<MapMarker>(null);
  const mapViewRef = useRef<MapView>(null);

  const coordValue = useSharedValue({
    latitude: FIRST_LAT,
    longitude: FIRST_LONG,
  });

  const [direction, setDirection] = useState(0);
  const [courseStatus, setCourseStatus] = useState<
    'finished' | 'coursing' | 'notStarted'
  >('notStarted');

  const resetCourse = () => {
    const initCoord = {latitude: FIRST_LAT, longitude: FIRST_LONG};

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

  const updateMarkerPosition = (coord: Coord) => {
    if (markerRef && markerRef.current) {
      markerRef.current.setNativeProps({
        coordinate: coord,
      });
    }
  };

  const moveCarToDestination = (index: number, length: number) => {
    if (index === null || index === length) {
      setCourseStatus('finished');
      return;
    }

    setCourseStatus('coursing');

    const coord = COURSE[index];
    const duration = coord.speed > 0 ? BASE_CAR_SPEED / coord.speed : 100;

    animateMarkerPosition(coord, duration);
    updateMapViewPostition(coord, duration);

    setTimeout(() => {
      setDirection(coord.direction);
      moveCarToDestination(index + 1, length);
    }, duration);
  };

  useDerivedValue(() => {
    if (coordValue.value) {
      runOnJS(updateMarkerPosition)({
        latitude: coordValue.value.latitude,
        longitude: coordValue.value.longitude,
      });
    }
  }, [coordValue]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        initialRegion={{
          latitude: FIRST_LAT,
          longitude: FIRST_LONG,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker
          ref={markerRef}
          coordinate={{
            latitude: FIRST_LAT,
            longitude: FIRST_LONG,
          }}>
          <VehiclesSprite direction={direction} carType="type6" />
        </Marker>

        <Marker
          coordinate={{
            latitude: FIRST_LAT,
            longitude: FIRST_LONG,
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
            latitude: LAST_LAT,
            longitude: LAST_LONG,
          }}>
          <View style={styles.iconContainer}>
            <Image
              source={require('@assets/images/flagIcon.png')}
              style={styles.icon}
            />
          </View>
        </Marker>

        <Polyline
          coordinates={COURSE}
          strokeWidth={3}
          strokeColor={colors.primary}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() =>
            courseStatus === 'finished'
              ? resetCourse()
              : moveCarToDestination(0, COURSE_LEN)
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
