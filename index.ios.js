/**
 * Created by Shiah on 2017/4/14.
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import Layout from "./js/components/Layout";

/**
 * Program entries.
 */
export default class PacoPac extends React.Component {

    /**
     * Render function.
     */
    render() {
        return (
            <Layout />
        );
    }
}


AppRegistry.registerComponent('PacoPac', () => PacoPac);
