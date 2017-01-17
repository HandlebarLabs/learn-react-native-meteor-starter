import { Dimensions } from 'react-native';
import { create } from 'react-native-platform-stylesheet';
import color from 'color';
import colors from '../../config/colors';

const window = Dimensions.get('window');

export const BUTTON_SIZE = window.width * 0.4;
export const ICON_COLOR = '#FFF';
export const ICON_SIZE = BUTTON_SIZE * 0.4;
export const BACKGROUND_COLOR = colors.primary;
export const UNDERLAY_COLOR = color(BACKGROUND_COLOR).lighten(0.25);

export default create({
  button: {
    backgroundColor: BACKGROUND_COLOR,
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
  },
});
