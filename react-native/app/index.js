import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Meteor, { createContainer } from 'react-native-meteor';
import config from './config/config';
import Router from './config/router';
import colors from './config/colors';
import { AlertProvider } from './components/Alert';

Meteor.connect(config.SERVER_URL);

const renderIcon = (isSelected, name, title) => {
  const color = isSelected ? colors.primary : colors.iconSubtle;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon
        name={name}
        color={color}
        size={28}
      />
      <Text
        style={{ color }}
      >
        {title}
      </Text>
    </View>
  );
};

const App = ({ user }) => {
  const accountRoute = user ? Router.getRoute('profile') : Router.getRoute('signUp');
  return (
    <AlertProvider>
      <NavigationProvider router={Router}>
        <TabNavigation
          id="main"
          navigatorUID="main"
          initialTab="home"
        >
          <TabItem
            id="home"
            renderIcon={(isSelected) => renderIcon(isSelected, 'home', 'Home')}
          >
            <StackNavigation
              id="home"
              navigatorUID="home"
              initialRoute={Router.getRoute('findNearMe')}
            />
          </TabItem>
          <TabItem
            id="account"
            renderIcon={(isSelected) => renderIcon(isSelected, 'account-circle', 'Account')}
          >
            <StackNavigation
              id="account"
              navigatorUID="account"
              initialRoute={accountRoute}
            />
          </TabItem>
        </TabNavigation>
      </NavigationProvider>
    </AlertProvider>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, App);
