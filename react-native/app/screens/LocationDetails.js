import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import _ from 'lodash';
import Meteor, { createContainer } from 'react-native-meteor';
import Container from '../components/Container';
import colors from '../config/colors';

class LocationDetails extends Component {
  static propTypes = {
    location: PropTypes.object,
  }

  render() {
    console.log(this.props.location);
    const location = this.props.location || _.get(this.props, 'navigation.state.params.location', {});
    const userId = _.get(this.props, 'user._id', '');
    const checkedIn = location.checkedInUserId === userId;
    const available = typeof location.checkedInUserId !== 'string';

    let icon = { name: 'check' };
    let title = 'Check In';
    let backgroundColor = colors.primary;

    if (checkedIn) {
      icon = { name: 'close' };
      title = 'Check Out';
      backgroundColor = colors.red;
    } else if (!available) {
      icon = { name: 'close' };
      title = 'Not Available';
    }

    return (
      <Container scroll>
        <Card
          title={location.station_name}
        >
          <Text>{location.street_address}</Text>
          <Text>{location.access_days_time}</Text>
        </Card>
        <Button
          raised
          icon={icon}
          title={title}
          backgroundColor={backgroundColor}
          buttonStyle={{ marginVertical: 20 }}
          disabled={!available && !checkedIn}
        />
      </Container>
    );
  }
}

const ConnectedLocationDetails = createContainer((params) => {
  const location = _.get(params, 'navigation.state.params.location', {});

  Meteor.subscribe('Locations.pub.details', { locationId: location._id });

  return {
    user: Meteor.user(),
    location: Meteor.collection('locations').findOne({ _id: location._id }),
  };
}, LocationDetails);

export default ConnectedLocationDetails;
