/**
 * Created by Shiah on 2017/4/14.
 */
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    TouchableHighlight
} from 'react-native';
/**
 * Program entries.
 */
export default class Remotes extends React.Component {

    render() {
        const routes = [
            {dom: <Text>Home Page</Text>, index: 0},
            {dom: <Text>Sony Controller Panel</Text>, index: 1},
            {dom: <Text>TV Controller Panel</Text>, index: 1},

        ];

        return (
            /**
             * Render function
             * @returns {XML}
             */
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route, navigator) => <View>
                    <Text onPress={() => {
                        if(route.index == 0) {
                            navigator.push(routes[1]);
                        }
                    }}>Sony controller</Text>

                    <Text onPress={() => {
                        if(route.index == 0) {
                            navigator.push(routes[2]);
                        }
                    }}>TV controller</Text>

                    {route.dom}
                </View>
                }
                style={{padding: 100}}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) => {
                                return (<Text onPress={() => {
                                    if(route.index > 0) {
                                        navigator.pop();
                                    }
                                }}>Cancel</Text>);
                            },
                            RightButton: (route, navigator, index, navState) => {
                                return (<Text>Done</Text>);
                            },
                            Title: (route, navigator, index, navState) => {
                                return (<Text>Awesome Nav Bar</Text>);
                            },
                        }}
                        style={{backgroundColor: 'gray'}}
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
});

