import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Locations } from './locations';

export const getNearestLocations = new ValidatedMethod({
  name: 'Locations.getNearestLocations',
  validate: new SimpleSchema({
    latitude: { type: Number, decimal: true },
    longitude: { type: Number, decimal: true },
  }).validator(),
  run({ latitude, longitude }) {
    console.log(latitude, longitude);
    return Locations.find({}, { limit: 10 }).fetch();
  },
});
