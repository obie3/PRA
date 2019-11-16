import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';
import Home  from '../screens/Home/Home';
import Error  from '../screens/Error/Error';
import Success  from '../screens/Success/Success';
import Network  from '../screens/Network/Network';
import StartScreen from '../screens/StartScreen/StartScreen' 


 const AuthStack = createStackNavigator({ 
  StartScreen: {
    screen: StartScreen,
    navigationOptions: {
      header: null
    }
  },

  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },

  Success: {
    screen: Success,
    navigationOptions: {
      header: null
    },
  },
  Error: {
    screen: Error,
    navigationOptions: {
      header: null
    },
  },

  Network: {
    screen: Network,
    navigationOptions: {
      header: null
    },
  },

  
});



const AppSwitchNavigator = createSwitchNavigator({
    AuthLoading:Home,
    Auth:AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppSwitchNavigator);


