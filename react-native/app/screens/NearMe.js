import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Container from '../components/Container';
import FloatingButton from '../components/FloatingButton';

class NearMe extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  goToLocationDetails = (location) => {
    this.props.navigation.navigate('LocationDetails', { location });
  };

  replaceScreen = () => {
    const { locations, position } = this.props.navigation.state.params;
    this.props.navigation.dispatch({
      key: 'NearMeMap',
      type: 'ReplaceCurrentScreen',
      routeName: 'NearMeMap',
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
    const { locations } = this.props.navigation.state.params;

    return (
      <View>
        <Container scroll>
          <List>
            {
              locations.map((l) => (
                <ListItem
                  key={l._id}
                  title={l.station_name}
                  subtitle={this.subTitle(l)}
                  onPress={() => this.goToLocationDetails(l)}
                />
              ))
            }
          </List>
        </Container>
        <FloatingButton
          icon="map"
          onPress={this.replaceScreen}
        />
      </View>
    );
  }
}


export default NearMe;
