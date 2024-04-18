import {StyleSheet} from 'react-native';

import colors from '../../consts/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {gap: 12, padding: 32},
  header: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
