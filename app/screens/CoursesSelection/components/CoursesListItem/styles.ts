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
    height: 32,
    marginLeft: 22,
    backgroundColor: colors.line,
  },
});
