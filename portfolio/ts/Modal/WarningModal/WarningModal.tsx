/* eslint-disable prettier/prettier */
/**
 * @providesModule WarningModal
 * @flow
 */

import React from 'react';
import ModalNavigationController from '../../Utilities/ModalNavigationController';
import styles from './WarningModalStyle';

import {
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

interface Props {
  title: string,
  context: string,
  buttonArray: Array<any>,
  onCancel: () => void,
  onNext: () => void,

}


export default class WarningModal extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  _renderDetails(): React.ReactElement {
    return (
      <View>

      </View>
    );
  }

  _renderTitle(): React.ReactElement {
    return (
    <View>
      {this.props.title}
    </View>
    );
  }

  _renderContext(): React.ReactElement {
    return (
      <View>
        {this.props.context}
      </View>
    );
  }

  _renderButtons(): React.ReactElement {
    return (
      <View>
        
      </View>
    );
  }

  _onCancel = () => {
    ModalNavigationController.hideModal();
  }

  render(): React.ReactElement {
    return (
      <View style={[styles.fullScreenContainer, styles.dropShadowContainer, styles.screenContainer]}>
        {this._renderDetails()}
      </View>
    );
  }
}