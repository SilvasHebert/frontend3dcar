import React from 'react';
import {useTranslation} from 'react-i18next';
import {StatusBar, View} from 'react-native';
import {FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CoursesListItem} from '../../components/CoursesListItem';
import colors from '../../consts/colors';
import gpsData from '../../data/sources/local/gpsData.json';
import {CoursesSelectionProps} from '../../types/routes';

import styles from './styles';

export function CoursesSelection() {
  const {t} = useTranslation();
  const {navigate} = useNavigation<CoursesSelectionProps>();

  return (
    <>
      <StatusBar backgroundColor={colors.card} barStyle={'light-content'} />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.header}>{t('CoursesSelectionTitle')}</Text>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          data={gpsData.courses}
          renderItem={({item}) =>
            CoursesListItem(item, () => {
              navigate('FollowCourse', {course: item});
            })
          }
        />
      </View>
    </>
  );
}
