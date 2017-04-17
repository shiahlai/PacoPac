/**
 * Created by Shiah on 2017/4/14.
 */
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TabBarIOS,
} from 'react-native';



/**
 * Program entries.
 */
export default class TabBarIos extends React.Component {

    render() {
        static title = '<TabBarIOS>';
        static description = 'Tab-based navigation.';
        static displayName = 'TabBarExample';

        state = {
            selectedTab: 'redTab',
            notifCount: 0,
            presses: 0,
        };

        _renderContent = (color: string, pageText: string, num?: number) => {
            return (
                <View style={[styles.tabContent, {backgroundColor: color}]}>
                    <Text style={styles.tabText}>{pageText}</Text>
                    <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
                </View>
            );
        };

        return (
            /**
             * Render function
             * @returns {XML}
             */
            <TabBarIOS
                unselectedTintColor="yellow"
                tintColor="white"
                unselectedItemTintColor="red"
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="Blue Tab"
                    icon={{uri: base64Icon, scale: 3}}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}>
                    {this._renderContent('#414A8C', 'Blue Tab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    badgeColor="black"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                            notifCount: this.state.notifCount + 1,
                        });
                    }}>
                    {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('./flux.png')}
                    selectedIcon={require('./relay.png')}
                    renderAsOriginal
                    title="More"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                            presses: this.state.presses + 1
                        });
                    }}>
                    {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
                </TabBarIOS.Item>
            </TabBarIOS>

        );
    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

