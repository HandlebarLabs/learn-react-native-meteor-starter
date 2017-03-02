import {
  createRouter,
} from '@exponent/ex-navigation';

import FindNearMe from '../screens/FindNearMe';
import LocationDetails from '../screens/LocationDetails';
import NearMe from '../screens/NearMe';
import NearMeMap from '../screens/NearMeMap';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';

const Router = createRouter(() => ({
  findNearMe: () => FindNearMe,
  nearMe: () => NearMe,
  nearMeMap: () => NearMeMap,
  locationDetails: () => LocationDetails,
  signIn: () => SignIn,
  signUp: () => SignUp,
  profile: () => Profile,
}));

export default Router;
