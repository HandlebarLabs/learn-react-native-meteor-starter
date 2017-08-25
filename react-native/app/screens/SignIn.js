import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import Meteor from 'react-native-meteor';
import { NavigationActions } from 'react-navigation';
import Container from '../components/Container';
import { Input, PrimaryButton } from '../components/Form';
import { connectAlert } from '../components/Alert';

class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername: '',
      password: '',
    };
  }

  signIn = () => {
    const { emailOrUsername, password } = this.state;

    if (emailOrUsername.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Email or username is required.');
    }

    if (password.length === 0) {
      return this.props.alertWithType('error', 'Error', 'Password is required.');
    }

    this.setState({ loading: true });
    return Meteor.loginWithPassword(emailOrUsername, password, (err) => {
      this.setState({ loading: false });
      if (err) {
        this.props.alertWithType('error', 'Error', err.reason);
      } else {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Profile' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }
    });
  };

  render() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email or Username"
            placeholder="Please enter your email or username..."
            keyboardType="email-address"
            onChangeText={(emailOrUsername) => this.setState({ emailOrUsername })}
            value={this.state.emailOrUsername}
          />
          <Input
            label="Password"
            placeholder="Please enter your password..."
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          <PrimaryButton
            title="Sign In"
            onPress={this.signIn}
          />
        </Card>
      </Container>
    );
  }
}

export default connectAlert(SignIn);
