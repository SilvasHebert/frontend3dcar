import {StyleSheet} from 'react-native';
import colors from '@consts/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  imageContainer: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: colors.iconBackground,
  },
  infoContainer: {flex: 1},
  icon: {height: 24, width: 24},
  text: {color: colors.white},
  dateTime: {color: colors.fadeText},
});
