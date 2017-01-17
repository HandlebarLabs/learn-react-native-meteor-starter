import { create } from 'react-native-platform-stylesheet';
import colors from '../../config/colors';

export const ICON_SIZE = 70;
export const ICON_SIZE_SMALL = 40;
export const ICON_COLOR = colors.iconSubtle;

export default create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: colors.defaultText,
  },
  textSmall: {
    fontSize: 16,
  },
});
