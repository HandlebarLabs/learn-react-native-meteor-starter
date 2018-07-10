import PropTypes from 'prop-types';
import React from 'react';
import Meteor, { withTracker } from 'react-native-meteor';

import Profile from './Profile';
import SignUp from './SignUp';

const ProfileLayout = (props) => {
  if (props.user) {
    return <Profile {...props} />;
  }

  return <SignUp {...props} />;
};

ProfileLayout.propTypes = {
  user: PropTypes.object,
};

export default withTracker(() => {
  return {
    user: Meteor.user(),
  };
})(ProfileLayout);
