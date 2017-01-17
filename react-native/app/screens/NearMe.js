import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';

class NearMe extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Near Me',
    },
  }

  render() {
    return (
      <Container>
        <Header>
          Near Me
        </Header>
      </Container>
    );
  }
}


export default NearMe;
