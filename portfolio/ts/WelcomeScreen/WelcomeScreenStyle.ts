/**
 * @provideModule WelcomeScreenStyle
 * @flow
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E6C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleHeading: {
    fontSize: 40,
    color: '#002942',
  },
  textStyleSubHeading: {
    paddingTop: 5,
    fontSize: 25,
    color: '#5F6B6E',
    padding: 30,
  },
});
