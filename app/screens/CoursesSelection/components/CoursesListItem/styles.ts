import {StyleSheet} from 'react-native';
import colors from '@consts/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
    padding: 12,
    backgroundColor: colors.card,
  },
  line: {
    width: 2,
    height: 54,
    marginLeft: 26,
    backgroundColor: colors.line,
  },
});
