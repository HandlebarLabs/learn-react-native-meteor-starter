import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'react-native-elements';
import Container from '../components/Container';

class NearMe extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Near Me',
    },
  }

  static propTypes = {
    route: PropTypes.object,
  }

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
    const { locations } = this.props.route.params;

    return (
      <Container scroll>
        <List>
          {
            locations.map((l) => (
              <ListItem
                key={l._id}
                title={l.station_name}
                subtitle={this.subTitle(l)}
              />
            ))
          }
        </List>
      </Container>
    );
  }
}


export default NearMe;
