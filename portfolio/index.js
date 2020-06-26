/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './ts/Home/App';
import WelcomeScreen from './ts/WelcomeScreen/WelcomeScreen';
import LoginScreen from './ts/LoginScreen/LoginScreen';
import WorkHistoryScreen from './ts/ExtraInformation/WorkHistory/WorkHistoryScreen/WorkHistoryScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WorkHistoryScreen);
