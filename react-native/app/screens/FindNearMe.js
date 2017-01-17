import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';

class FindNearMe extends Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <Container>
        <Header>
          Find Near Me
        </Header>
      </Container>
    );
  }
}

export default FindNearMe;
