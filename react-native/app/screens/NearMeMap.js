import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Container from '../components/Container';
import FloatingButton from '../components/FloatingButton';

class NearMeMap extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  goToLocationDetails = (location) => {
    this.props.navigation.navigate('LocationDetails', { location });
  };

  replaceScreen = () => {
    const { locations, position } = this.props.navigation.state.params;
    this.props.navigation.dispatch({
      key: 'NearMe',
      type: 'ReplaceCurrentScreen',
      routeName: 'NearMe',
      params: { locations, position },
    });
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
    const { locations, position } = this.props.navigation.state.params;

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

export default NearMeMap;
