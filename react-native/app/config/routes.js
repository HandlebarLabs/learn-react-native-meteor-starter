/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FindNearMe from '../screens/FindNearMe';
import LocationDetails from '../screens/LocationDetails';
import NearMe from '../screens/NearMe';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ProfileLayout from '../screens/ProfileLayout';
import Profile from '../screens/Profile';

export const HomeStack = StackNavigator({
  FindNearMe: {
    screen: FindNearMe,
    navigationOptions: {
      header: () => null,
    },
  },
  LocationDetails: {
    screen: LocationDetails,
    navigationOptions: {
      title: 'Location Details',
    },
  },
  NearMe: {
    screen: NearMe,
    navigationOptions: {
      title: 'Near Me',
    },
  },
}, {
  headerMode: 'screen',
});

const prevGetStateForActionHomeStack = HomeStack.router.getStateForAction;
HomeStack.router = {
  ...HomeStack.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionHomeStack(action, state);
  },
};

export const ProfileStack = StackNavigator({
  ProfileLayout: {
    screen: ProfileLayout,
    navigationOptions: {
      title: 'Account',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Account',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Account',
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
    },
  },
}, {
  headerMode: 'screen',
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          color={tintColor}
          size={28}
        />
      ),
    },
  },
  Account: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="account-circle"
          color={tintColor}
          size={28}
        />
      ),
    },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
});
