import { create } from 'react-native-platform-stylesheet';
import colors from '../../config/colors';

export default create({
  primaryButton: {
    marginTop: 20,
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    marginVertical: 20,
    marginHorizontal: 30,
    padding: 15,
  },
  secondaryButtonText: {
    alignSelf: 'center',
    color: colors.textSubtle,
  },
  input: {
    height: 40,
  },
});
