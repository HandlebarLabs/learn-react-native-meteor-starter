import { Mongo } from 'meteor/mongo';

export const Locations = new Mongo.Collection('locations');

Locations.rawCollection().createIndex({ location: '2dsphere' });

Locations.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
