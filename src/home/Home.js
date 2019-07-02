import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>这是首页</Text>
                <Image style={styles.tabBarIcon} source={require('../assets/image/icon_home_selected.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
      }
});