import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Me from '../screens/Me';
import Login from '../screens/Login';
import Event from '../screens/Event';

export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
});

export const Tabs = TabNavigator({
  Login: {
    screen: LoginStack,
    navigationOptions: {
      tabBar: {
        label: 'Login',
        icon: ({ tintColor }) => <Icon type="foundation" name="social-facebook" size={30} color={tintColor} />
      },
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: 'Profile',
        icon: ({ tintColor }) => <Icon name="account-circle" size={30} color={tintColor} />
      },
    },
  },
  Event: {
    screen: Event,
    navigationOptions: {
      tabBar: {
        label: 'Event',
        icon: ({ tintColor }) => <Icon type="font-awesome" name="group" size={25} color={tintColor} />
      },
    },
  },
});
