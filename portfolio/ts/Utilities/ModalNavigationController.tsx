/* eslint-disable consistent-this */
/* eslint-disable prettier/prettier */
/**
 * @providesModule ModalNavigationController
 * @flow
 *
 */

import React from 'react';
import Modal from 'react-native-modal';

import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';


interface State {
  isVisible: boolean;
  props: object;
  components: React.ReactElement;
}

let modalNavInstance: ModalNavigationController;
let MODAL_CHANGE_TIME: number = 150;

export default class ModalNavigationController extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: false,
      props: {},
      components: <View/>,
    };

    modalNavInstance = this;
  }

  static isModalShown(): boolean {
    return modalNavInstance ? modalNavInstance.state.isVisible : false;
  }

  static showModal(components: React.ReactElement, props: object = {}) {
    if (modalNavInstance) {
      props = props || {animationType: 'fade', transparent: true}; // default props
      modalNavInstance._showModal(components, props, MODAL_CHANGE_TIME);
    }
  }

  _showModal(components: React.ReactElement, props: object, shiftTime: number) {
    ModalNavigationController.hideModal();
    setTimeout(() => {
      this.setState({
        isVisible: true,
        props: props,
        components: components,
      });
    }, shiftTime);
  }

  static hideModal(completion?: () => {}) {
    if (modalNavInstance) {
      modalNavInstance._hideModal(completion);
    }
  }

  _hideModal(completion?: () => {}) {
    this.setState({
      isVisible: false,
      props: {},
      components: <View/>,
    }, () => {
        if (completion) {
          completion();
        }
    });
  }

  render(): React.ReactElement {
    return (
      <View>
        <Modal  {...this.state.props}
                isVisible={this.state.isVisible}>
          <View style={[StyleSheet.absoluteFill, {width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}]}>
            {this.state.components}
          </View>
        </Modal>
      </View>
    );
  }
}
