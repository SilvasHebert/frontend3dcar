import {StyleSheet} from 'react-native';

import colors from '../../../consts/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
    height: 48,
  },
  imageContainer: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: colors.iconBackground,
  },
  infoContainer: {flex: 1},
  icon: {height: 24, width: 24},
  line: {
    width: 2,
    height: 32,
    backgroundColor: colors.line,
  },
  text: {color: colors.white},
  dateTime: {color: colors.fadeText},
});
