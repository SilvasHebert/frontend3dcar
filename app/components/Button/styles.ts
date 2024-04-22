import {StyleSheet} from 'react-native';
import colors from '@consts/colors';

export default StyleSheet.create({
  button: {
    height: 52,
    backgroundColor: colors.primary + 'FF',
    borderRadius: 24,
    justifyContent: 'center',
  },
  buttonDisabled: {
    height: 52,
    backgroundColor: colors.primary + 'FF',
    borderRadius: 24,
    justifyContent: 'center',
    opacity: 0.7,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
