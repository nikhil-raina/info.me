/* eslint-disable prettier/prettier */
/**
 * @providesModule WorkHistory
 * @flow
 */

import React from 'react';
import Experience from '../../ObjectModules/INFExperience';
import styles from './WorkHistoryScreenStyle';
import WorkHistory from '../../ObjectModules/INFWorkHistory';
import WorkHistoryController from '../WorkHistoryController';
import {
  View,
  Text,
} from 'react-native';

interface Props {
  jobs: Array<Experience>,
  WorkHistoryData: Array<WorkHistory>,
}

export default class WorkHistoryScreen extends React.Component<Props, {}> {

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
