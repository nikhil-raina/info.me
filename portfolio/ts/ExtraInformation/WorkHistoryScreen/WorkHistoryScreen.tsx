/* eslint-disable prettier/prettier */
/**
 * @providesModule WorkHistory
 * @flow
 */

import React from 'react';
import styles from './WorkHistoryScreenStyle';
import {
  View,
  Text,
} from 'react-native';


export default class WorkHistoryScreen extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render(): React.ReactElement {
    return (
      <View style={styles.MainContainer}>
        <Text>
          {'Work history cells will appear here'}
        </Text>
      </View>
    );
  }
}