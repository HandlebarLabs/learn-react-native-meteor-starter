import { Mongo } from 'meteor/mongo';

export const Activity = new Mongo.Collection('activity');

Activity.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
