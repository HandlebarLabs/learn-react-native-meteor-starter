import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

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

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, ProfileLayout);
