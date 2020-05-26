/* eslint-disable prettier/prettier */
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
        <Text style={styles.textStyleHeading}>
          Hello
        </Text>
        <Text style={styles.textStyleSubHeading}>
          Hello this is the subtitle text that I will be putting in here
        </Text>
      </View>
    );
  }
}
