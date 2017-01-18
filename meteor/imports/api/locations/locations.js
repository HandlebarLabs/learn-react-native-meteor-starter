import { Mongo } from 'meteor/mongo';

export const Locations = new Mongo.Collection('locations');

Locations.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
