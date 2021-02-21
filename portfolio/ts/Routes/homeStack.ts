/* eslint-disable prettier/prettier */
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Home/HomeScreen/HomeScreen';
import LoginScreen from '../LoginScreen/LoginScreen';

const screens = {
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
