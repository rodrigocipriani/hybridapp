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

export const HomeScene = React.createClass({

    render: function () {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        No Celular!!!!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>

                    <Image
                        style={styles.logo}
                        source={require('../assets/react-native-web.png')}
                    />
                    <Touchable style={styles.touchable} onPress={()=> console.log("Can't touched this?")}>
                        <Text style={styles.welcome}>
                            No Browser!!
                        </Text>
                        <Text style={styles.instructions}>
                            To get started, edit index.web.js
                        </Text>
                        <Text style={styles.instructions}>
                            Press Cmd+R to reload,{'\n'}
                            Alt+Cmd+I for dev menu
                        </Text>
                    </Touchable>
                </View>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    touchable: {
        backgroundColor: '#CAE6FE',
    }
});
