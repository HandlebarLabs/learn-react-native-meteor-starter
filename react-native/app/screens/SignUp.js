import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import Container from '../components/Container';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';

class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChangeEmail = (email) => {
    const { username } = this.state;
    const update = { email };
    const inferredUsername = email.split('@')[0];
    if (username === inferredUsername.slice(0, inferredUsername.length - 1)) {
      update.username = inferredUsername;
    }
    this.setState(update);
  };

  goToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email"
            placeholder="Please enter your email..."
            keyboardType="email-address"
            onChangeText={this.handleChangeEmail}
            value={this.state.email}
          />
          <Input
            label="Username"
            placeholder="Please enter your username..."
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />
          <Input
            label="Password"
            placeholder="Please enter your password..."
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          <Input
            label="Confirm Password"
            placeholder="Please enter confirm your password..."
            secureTextEntry
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
          />
          <PrimaryButton
            title="Sign Up"
          />
        </Card>

        <SecondaryButton
          title="Sign In"
          onPress={this.goToSignIn}
        />
      </Container>
    );
  }
}

export default SignUp;
