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
    Image
} from 'react-native';

export const Header = ({}) => (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image
                style={styles.logo}
                source={require('../../assets/whiteorblack-logo.png')}
            />
        </View>
        <View style={styles.containerMenu}>
            <Text style={styles.text}>Barra de opções superior!!</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#545454',
        padding: 10
    },
    containerLogo: {
        flexDirection: 'row',
    },
    containerMenu: {
        flexDirection: 'row',
        padding: 10
    },
    text: {
        color: '#ffffff'
    },
    logo: {
        alignSelf: 'center',
        width: 30,
        height: 30
    }
});
