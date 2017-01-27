import React, { Component, PropTypes } from 'react';
import Meteor from 'react-native-meteor';
import Router from '../config/router';
import Container from '../components/Container';
import { Header } from '../components/Text';
import { PrimaryButton } from '../components/Form';

class Profile extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Profile',
    },
  }

  static propTypes = {
    navigator: PropTypes.object,
  }

  signOut = () => {
    Meteor.logout();
    this.props.navigator.immediatelyResetStack([Router.getRoute('signUp')]);
  };

  render() {
    return (
      <Container>
        <Header>
          Profile
        </Header>
        <PrimaryButton
          title="Sign Out"
          onPress={this.signOut}
        />
      </Container>
    );
  }
}

export default Profile;
