/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, {Component} from 'react';
import {
    Dimensions,
    View,
    Text,
    StyleSheet,
    DrawerLayoutAndroid
} from 'react-native';

import {NavigatorView} from './NavigatorView';
import {Header} from './Header';

export const Container = React.createClass({

    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function () {
        return (
            <View style={styles.wrap}>

                <View style={styles.navigation}>
                    <NavigatorView />
                </View>
                <View style={styles.containerWrapper}>
                    <View style={styles.header}>
                        <Header />
                    </View>
                    <View style={styles.container}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        flexDirection: 'row'
    },
    containerWrapper: {
        flex: 1
    },
    header: {

    },
    container: {
        flex: 1
    },
    navigation: {
        width: 250
    },
});
