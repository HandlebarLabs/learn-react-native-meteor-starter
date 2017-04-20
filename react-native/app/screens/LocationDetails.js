import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { Button, Card, List, ListItem } from 'react-native-elements';
import _ from 'lodash';
import Meteor, { createContainer } from 'react-native-meteor';
import moment from 'moment';
import Container from '../components/Container';
import colors from '../config/colors';
import NotFound from '../components/NotFound';
import { Header } from '../components/Text';
import { connectAlert } from '../components/Alert';

const CHECKED_IN = 'in';
const CHECKED_OUT = 'out';

class LocationDetails extends Component {
  static propTypes = {
    location: PropTypes.object,
    activityReady: PropTypes.bool,
    activity: PropTypes.array,
    user: PropTypes.object,
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      changingStatus: false,
    };
  }

  attemptCheckin = () => {
    const { location } = this.props;
    let status = CHECKED_IN;
    if (location.checkedInUserId) {
      status = CHECKED_OUT;
    }

    if (this.props.user !== null) {
      this.setState({ changingStatus: true });
      Meteor.call('Locations.changeCheckin', { locationId: location._id, status }, (err) => {
        if (err) {
          this.props.alertWithType('error', 'Error', err.reason);
        }
        this.setState({ changingStatus: false });
      });
    } else {
      this.props.navigation.performAction(({ tabs }) => {
        tabs('main').jumpToTab('account');
      });
    }
  };

  renderItems = () => {
    if (!this.props.activityReady) {
      return <Header>Loading...</Header>;
    } else if (this.props.activity.length === 0) {
      return (
        <NotFound
          text="No activity yet."
          small
        />
      );
    }

    return this.props.activity.map((a) => (
      <ListItem
        key={a._id}
        title={a.username}
        subtitle={moment(a.createdAt).format('MMM Do @ h:mma')}
        rightTitle={a.type === CHECKED_IN ? 'Checked In' : 'Checked Out'}
      />
    ));
  };

  render() {
    const location = this.props.location || _.get(this.props, 'route.params.location', {});
    const userId = _.get(this.props, 'user._id', 'demo');
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
          onPress={this.attemptCheckin}
          loading={this.state.changingStatus}
        />
        <Card
          title="Activity"
        >
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
            {this.renderItems()}
          </List>
        </Card>
      </Container>
    );
  }
}

const ConnectedLocationDetails = createContainer((params) => {
  const location = _.get(params, 'route.params.location', {});

  Meteor.subscribe('Locations.pub.details', { locationId: location._id });
  const activityHandle = Meteor.subscribe('Activity.pub.list', { locationId: location._id });

  return {
    user: Meteor.user(),
    location: Meteor.collection('locations').findOne({ _id: location._id }),
    activityReady: activityHandle.ready(),
    activity: Meteor.collection('activity').find({ locationId: location._id }, { sort: { createdAt: -1 } }),
  };
}, LocationDetails);

ConnectedLocationDetails.route = {
  navigationBar: {
    visible: true,
    title: 'Location Details',
  },
};

export default connectAlert(ConnectedLocationDetails);
