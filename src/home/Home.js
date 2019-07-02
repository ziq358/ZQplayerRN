import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
    static navigationOptions = {
        //创建标签
        tabBarLabel:'首页'
        // //添加图标
        // tabBarIcon:({focused})=>(
        //         if (focused) {
        //             return (
        //                 <Image style={styles.tabBarIcon} source={require('../../img/fri_sel.png')}/>
        //             );
        //         }
        //         return (
        //             <Image style={styles.tabBarIcon} source={require('../../img/fri_nor.png')}/>
        //         );
        //     ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>这是首页</Text>
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