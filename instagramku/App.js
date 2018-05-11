import React,{ Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Navbar from './screens/Navbar'
import Splash from './screens/Splash'
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './store'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const RootStack = createStackNavigator({
  navbar: {
    screen: Navbar,
  },
  splash: {
    screen: Splash,
  }
},{
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'My instagram',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#34b8ed'
    },
    headerTitleStyle:{ color: '#fff', alignSelf: 'center' }
  }),
  headerMode: 'screen',
  initialRouteName: "splash"
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    )
  }
}
