import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Meteor from 'react-native-meteor';
import { NavigationActions } from 'react-navigation';
import Container from '../components/Container';
import { Header } from '../components/Text';
import { PrimaryButton } from '../components/Form';

class Profile extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  signOut = () => {
    Meteor.logout(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SignUp' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    });
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
