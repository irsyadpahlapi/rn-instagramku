import React, {Component} from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'

class Splash extends Component {
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    setTimeout( () => {
       this.setTimePassed();
    },2000);
  }

  setTimePassed() {
     this.props.navigation.navigate('navbar')
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={ styles.logo } source={{uri: "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png"}}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b8ed',
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    height: null,
    width: 82,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
})

export default Splash
