/* eslint-disable no-console, no-undef */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Locations } from '../../api/locations/locations';

Meteor.startup(() => {
  if (Locations.find().count() === 0) {
    const fuelStations = JSON.parse(Assets.getText('alt_fuel_stations.json'));

    console.time('DB_Seed');

    console.log(`Seeding DB with ${fuelStations.fuel_stations.length} documents`);
    console.log('Seeding DB...');

    const LocationsRaw = Locations.rawCollection();
    const bulkLocationsOp = LocationsRaw.initializeUnorderedBulkOp();
    bulkLocationsOp.executeSync = Meteor.wrapAsync(bulkLocationsOp.execute);

    fuelStations.fuel_stations.forEach((location) => {
      bulkLocationsOp.insert({
        _id: Random.id(),
        ...location,
        location: { type: 'Point', coordinates: [location.longitude, location.latitude] },
      });
    });
    bulkLocationsOp.executeSync();

    console.log('End DB Seed');
  }
});
