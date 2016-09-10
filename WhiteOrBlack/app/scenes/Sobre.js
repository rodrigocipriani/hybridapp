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
    Image
} from 'react-native';

import {Touchable} from '../common/Touchable';

export const SobreScene = React.createClass({

    render: function () {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                Sobre
            </View>
        );
    }

});

const styles = StyleSheet.create({

});
