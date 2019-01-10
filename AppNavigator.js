import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthScreen from './src/screens/AuthScreen/AuthScreen.js';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen.js';

const AppNavigator = createSwitchNavigator({
  AuthScreen: { screen: AuthScreen },
  ProfileScreen: { screen: ProfileScreen }
}
  ,
  {
    initialRouteName: "AuthScreen"
  }
);

const NavigatorContainer = createAppContainer(AppNavigator);

export default NavigatorContainer;
