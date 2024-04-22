import {StyleSheet} from 'react-native';
import colors from '@consts/colors';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    backgroundColor: colors.iconBackground,
    borderRadius: 6,
    padding: 6,
    marginBottom: 12,
  },
});
