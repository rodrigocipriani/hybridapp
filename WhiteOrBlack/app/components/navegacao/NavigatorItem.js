/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image
} from 'react-native';

import {Touchable} from '../../common/Touchable';

export const NavigatorItem = ({
    children
}) => (
    <Touchable style={styles.touchable} onPress={()=> console.log("Can't touched this?")}>
        <Text style={{margin: 20, fontSize: 15, textAlign: 'left'}}>{children}</Text>
    </Touchable>
)

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: '#CAE6FE',
    },
});
