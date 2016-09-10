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

export const Container = React.createClass({

    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function() {
        return (
            <View style={styles.wrap}>

                <View style={styles.navigation}>
                    <NavigatorView />
                </View>
                <View style={styles.container}>
                    <Text>Barra superior do BROWSER</Text>
                    {this.props.children}
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
    container: {
        flex: 1
    },
    navigation: {
        width: 250
    },
});
