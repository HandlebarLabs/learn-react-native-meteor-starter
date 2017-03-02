import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Container from '../components/Container';
import Router from '../config/router';
import FloatingButton from '../components/FloatingButton';

class NearMe extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Near Me Map',
    },
  }

  static propTypes = {
    route: PropTypes.object,
    navigator: PropTypes.object,
  }

  goToLocationDetails = (location) => {
    this.props.navigator.push(Router.getRoute('locationDetails', { location }));
  };

  replaceScreen = () => {
    const { locations, position } = this.props.route.params;
    this.props.navigator.replace(Router.getRoute('nearMe', { locations, position }));
  };

  subTitle = (location) => {
    let subtitle = '';
    if (location.street_address) {
      subtitle = location.street_address;
    }

    if (location.access_days_time && subtitle.length) {
      subtitle = `${subtitle} - ${location.access_days_time}`;
    } else if (location.access_days_time) {
      subtitle = location.access_days_time;
    }

    return subtitle;
  };

  render() {
    const { locations, position } = this.props.route.params;

    return (
      <Container>
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          initialRegion={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
        />
        <FloatingButton
          icon="list"
          onPress={this.replaceScreen}
        />
      </Container>
    );
  }
}

export default NearMe;
