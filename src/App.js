import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {HomeScreen} from './home/Home';


export const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       MyApp
//     );
//   }
// }