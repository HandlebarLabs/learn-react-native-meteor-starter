import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: colors.primary,
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  calloutContainer: {
    width: 140,
  },
  headerText: {
    color: colors.defaultText,
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    color: colors.defaultText,
    fontSize: 12,
  },
});
