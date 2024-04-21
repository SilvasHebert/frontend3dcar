import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, StatusBar, Text, View} from 'react-native';
import colors from '@consts/colors';

import gpsData from '../../data/sources/local/gpsData.json';
import {CoursesSelectionProps} from '../../types/routes';

import {CoursesListItem} from './components/CoursesListItem';
import styles from './styles';

export function CoursesSelection({navigation}: CoursesSelectionProps) {
  const {t} = useTranslation();

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
              navigation.navigate('FollowCourse', {course: item});
            })
          }
        />
      </View>
    </>
  );
}
