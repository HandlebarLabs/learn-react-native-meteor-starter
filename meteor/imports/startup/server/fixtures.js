/* eslint-disable no-console, no-undef */

import { Meteor } from 'meteor/meteor';
import { Locations } from '../../api/locations/locations';

Meteor.startup(() => {
  if (Locations.find().count() === 0) {
    const fuelStations = JSON.parse(Assets.getText('alt_fuel_stations.json'));
    console.log(`Seeding DB with ${fuelStations.fuel_stations.length} documents`);
    console.log('Seeding DB...');
    fuelStations.fuel_stations.forEach((location) => {
      Locations.insert({
        ...location,
        location: { type: 'Point', coordinates: [location.longitude, location.latitude] },
      });
    });
    console.log('End DB Seed');
  }
});
