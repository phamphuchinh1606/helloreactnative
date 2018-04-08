/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform} from 'react-native';
import Login from './components/Login';
import Employees from './components/Employees';
import MainEmployees from './components/MainEmployees';
import Main from './src/components/main/Main';
import RootStack from './demo';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Main/>
    );
  }
}
