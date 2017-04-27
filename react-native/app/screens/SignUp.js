import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';

class SignUp extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Sign Up',
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

export default SignUp;
