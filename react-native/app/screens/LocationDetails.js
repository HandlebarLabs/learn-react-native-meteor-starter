import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';

class LocationDetails extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Location Details',
    },
  }

  render() {
    return (
      <Container>
        <Header>
          Location Details
        </Header>
      </Container>
    );
  }
}

export default LocationDetails;
