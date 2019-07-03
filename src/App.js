import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './home/Home';
import AmusementScreen from './home/Amusement';
import SubscribeScreen from './home/Subscribe';
import DiscoverScreen from './home/Discover';
import MineScreen from './home/Mine';
import Color from './assets/values/color'

const AppTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => {
          return (
                <Image style={styles.tabBarIcon} 
                source={
                  focused ?
                  require('./assets/image/icon_home_selected.png')
                  :require('./assets/image/icon_home_normal.png')
                }/>
            );
      },
    }
  },
  Amusement: {
    screen: AmusementScreen,
    navigationOptions: {
      tabBarLabel: '娱乐',
      tabBarIcon: ({focused, tintColor}) => {
        return (
                <Image style={styles.tabBarIcon} 
                source={
                  focused ?
                  require('./assets/image/icon_amusement_selected.png')
                  :require('./assets/image/icon_amusement_normal.png')
                }/>
            );
      },
    }
  },
  Subscribe: {
    screen: SubscribeScreen,
    navigationOptions: {
      tabBarLabel: '订阅',
      tabBarIcon: ({focused, tintColor}) => {
        return (
                <Image style={styles.tabBarIcon} 
                source={
                  focused ?
                  require('./assets/image/icon_subscribe_selected.png')
                  :require('./assets/image/icon_subscribe_normal.png')
                }/>
            );
      },
    }
  },
  Discover: {
    screen: DiscoverScreen,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({focused, tintColor}) => {
          return (
                <Image style={styles.tabBarIcon} 
                source={
                  focused ?
                  require('./assets/image/icon_discover_selected.png')
                  :require('./assets/image/icon_discover_normal.png')
                }/>
            );
      },
    }
  },
  Mine: {
    screen: MineScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => {
        return (
                <Image style={styles.tabBarIcon} 
                source={
                  focused ?
                  require('./assets/image/icon_mine_selected.png')
                  :require('./assets/image/icon_mine_normal.png')
                }/>
            );
      },
    }
  },
}, {
  initialRouteName: 'Home',
  lazy: true,
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Color.color_333333,
    inactiveTintColor: Color.color_666666,
    style: {
      backgroundColor: Color.color_white,
    },
  }
})
const CreaterTab = createAppContainer(AppTab)

export default class App extends Component {
  render() {
    return (
      <CreaterTab style={styles.container} />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  }
});