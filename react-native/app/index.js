import React from 'react';
import Meteor from 'react-native-meteor';
import config from './config/config';
import { AlertProvider } from './components/Alert';
import { Tabs } from './config/routes';

Meteor.connect(config.SERVER_URL);

const App = () => {
  return (
    <AlertProvider>
      <Tabs />
    </AlertProvider>
  );
};

export default App;
