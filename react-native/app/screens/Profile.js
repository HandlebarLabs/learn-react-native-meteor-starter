import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';

class Profile extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Profile',
    },
  }

  render() {
    return (
      <Container>
        <Header>
          Profile
        </Header>
      </Container>
    );
  }
}

export default Profile;
