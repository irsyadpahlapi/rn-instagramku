import React, { Component } from 'react';
import { createTabNavigator } from 'react-navigation';
import Home from './Home'
import ListIg from './ListIg'
import About from './About'

export default createTabNavigator({
  home:{
    screen: Home
  },
  list: {
    screen: ListIg
  },
  about: {
    screen: About
  }
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'orange',
    activeBackgroundColor: '#62FFCE',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: '#00FFBD'
  }
});
