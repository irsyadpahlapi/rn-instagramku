import React, {Component} from 'react';
import { WebView } from 'react-native'

class About extends Component {
  render () {
    return (
      <WebView
        source={{uri: 'https://github.com/irsyadpahlapi'}}
        style={{marginTop: 5}}
      />
    )
  }
}

export default About
