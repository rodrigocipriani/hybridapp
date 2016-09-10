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

import {NavigatorItem} from './NavigatorItem';

export const NavigatorView = () => (
    <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
        <Image
            style={styles.logo}
            source={require('../../assets/whiteorblack-logo.png')}
        />
        <Text style={styles.logoText}>White or Black</Text>
        <Text>{' '}</Text>
        <NavigatorItem>Sobre</NavigatorItem>
        <NavigatorItem>Menu 2</NavigatorItem>
        <NavigatorItem>Menu 3</NavigatorItem>
        <NavigatorItem>Menu 4</NavigatorItem>
        <NavigatorItem>Menu 5</NavigatorItem>
    </View>
)

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    logoText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    }
});
