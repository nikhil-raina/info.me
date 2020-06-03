/* eslint-disable prettier/prettier */
/**
 * @providesModule WarningModal
 * @flow
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fullScreenContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  dropShadowContainer: {
    paddingHorizontal: 14,
    flexGrow: 1,
    paddingVertical: 30,
    backgroundColor: 'rgba(0, 0, 0, 0, 0.5)',
  },

  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  singleButtonContainer: {

  },

  doubleButtonContainer: {

  },

  buttonContainer: {
    flexDirection: 'row',
    height: 42,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: 'transparent',
  },

});
