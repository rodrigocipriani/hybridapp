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
    Navigator,
    TouchableHighlight
} from 'react-native';

import {Container} from './navegacao/Container';
import {HomeScene} from '../scenes/Home';
import {SobreScene} from '../scenes/Sobre';

export class App extends Component {
    render() {

        const routes = [
            {title: 'Home', index: 0, name: 'HOME'},
            {title: 'Sobre', index: 1, name: 'SOBRE'}
        ];

        return (
            <Container>

                <Navigator
                    style={styles.navigator}
                    initialRoute={routes[0]}
                    initialRouteStack={routes}
                    renderScene={(route, navigator) =>
                        <TouchableHighlight onPress={() => {
                            if (route.index === 0) {
                                navigator.push(routes[1]);
                            } else {
                                navigator.pop();
                            }
                        }}>
                            <Text>Hello {route.title}!</Text>
                        </TouchableHighlight>

                    }

                />
                <HomeScene />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});
