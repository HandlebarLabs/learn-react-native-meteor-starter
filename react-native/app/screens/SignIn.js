import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';

class SignIn extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Sign In',
    },
  }

  render() {
    return (
      <Container>
        <Header>
          Sign In
        </Header>
      </Container>
    );
  }
}

export default SignIn;
