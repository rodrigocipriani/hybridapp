/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    DrawerLayoutAndroid
} from 'react-native';

import {NavigatorView} from './NavigatorView';

export const Container = ({
    children
}) => (
    <View style={styles.container}>

        <View>
            <NavigatorView />
        </View>
        <View>
            <Text>BROWSER!</Text>
            {children}
        </View>
    </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
});
