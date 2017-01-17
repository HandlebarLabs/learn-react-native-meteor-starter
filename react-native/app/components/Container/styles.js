import { create } from 'react-native-platform-stylesheet';
import colors from '../../config/colors';

export default create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  scrollView: {
    backgroundColor: colors.background,
  },
});
