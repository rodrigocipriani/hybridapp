/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    DrawerLayoutAndroid
} from 'react-native';

import {Touchable} from '../../common/Touchable';

export const NavigatorView = () => (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>I'm in the Drawer!</Text>
        <Text>{' '}</Text>
        <Touchable style={styles.touchable} onPress={()=> console.log("Can't touched this?")}>
            <Text style={{margin: 20, fontSize: 15, textAlign: 'left'}}>Menu 1</Text>
        </Touchable>
        <Text style={{margin: 20, fontSize: 15, textAlign: 'left'}}>Menu 2</Text>
        <Text style={{margin: 20, fontSize: 15, textAlign: 'left'}}>Menu 3</Text>
        <Text style={{margin: 20, fontSize: 15, textAlign: 'left'}}>Menu 4</Text>
    </View>
)

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: '#CAE6FE',
    },
});
