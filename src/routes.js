import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';

const swith = createStackNavigator(
  {
    Main: {
      screen: Main,
      /*     headerMode:'none', */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#0b0a0d',
        },
        /*       header:null, */
      },
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: () => {
      return {
        headerStyle: {},
        headerTintColor: '#04d361',
        headerTitleStyle: {},
      };
    },
  },
);

const routes = createAppContainer(swith);

export default routes;
