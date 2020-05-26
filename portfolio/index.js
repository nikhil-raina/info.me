/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './ts/Home/App';
import WelcomeScreen from './ts/WelcomeScreen/WelcomeScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WelcomeScreen);
