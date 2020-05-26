/**
 * @providesModule WelcomeScreen
 * @flow
 */

import React from 'react';
import styles from './WelcomeScreenStyle';

import {View, Text} from 'react-native';

export default class WelcomeScreen extends React.Component {
  render(): React.ReactElement {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}
