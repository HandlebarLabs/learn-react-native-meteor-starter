import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';
import LocateMeButton from '../components/LocateMeButton';
import { connectAlert } from '../components/Alert';

class FindNearMe extends Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  static propTypes = {
    alertWithType: PropTypes.func,
  }

  handleGeolocationSuccess = (position) => {
    console.log('latitude', position.coords.latitude);
    console.log('longitude', position.coords.longitude);
  };

  handleGeolocationError = (error) => {
    this.props.alertWithType('error', 'Error', error.message);
  };

  goToNearMe = () => {
    navigator.geolocation.getCurrentPosition(
      this.handleGeolocationSuccess,
      this.handleGeolocationError,
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  render() {
    return (
      <Container>
        <LocateMeButton
          onPress={this.goToNearMe}
        />
        <Header>
          Find Nearest Charging Stations
        </Header>
      </Container>
    );
  }
}

export default connectAlert(FindNearMe);
