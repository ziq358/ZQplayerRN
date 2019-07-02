import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './home/Home';

const AppTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
                <Image style={styles.tabBarIcon} 
                source={require('./assets/image/icon_home_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} 
            source={require('./assets/image/icon_home_normal.png')}/>
          );
      },
    }
  },
  Amusement: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '娱乐',
      tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
                <Image style={styles.tabBarIcon} 
                source={require('./assets/image/icon_amusement_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} 
            source={require('./assets/image/icon_amusement_normal.png')}/>
          );
      },
    }
  },
  Subscribe: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '订阅',
      tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
                <Image style={styles.tabBarIcon} 
                source={require('./assets/image/icon_subscribe_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} 
            source={require('./assets/image/icon_subscribe_normal.png')}/>
          );
      },
    }
  },
  Discover: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
                <Image style={styles.tabBarIcon} 
                source={require('./assets/image/icon_discover_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} 
            source={require('./assets/image/icon_discover_normal.png')}/>
          );
      },
    }
  },
  Mine: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
                <Image style={styles.tabBarIcon} 
                source={require('./assets/image/icon_mine_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} 
            source={require('./assets/image/icon_mine_normal.png')}/>
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
    activeTintColor: 'red',
    style: {
      backgroundColor: '#fff',
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