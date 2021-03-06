/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    DrawerLayoutAndroid
} from 'react-native';

import {NavigatorView} from './NavigatorView';
import {Header} from './Header';

export const Container = ({
    children
}) => (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={NavigatorView}>
                <Header />
                {children}
            </DrawerLayoutAndroid>

);

const styles = StyleSheet.create({

});
