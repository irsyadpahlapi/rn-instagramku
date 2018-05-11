import React , {Component} from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showdatas } from './../store/data/data.action'

import axios from 'axios'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: {}
    }
  };
  componentDidMount() {
    this.props.showdatas()
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.datas.data.profile_picture}}
          style = {{width:150,height:150}} >
        </Image>
        <Text style={styles.teks}>{this.props.datas.data.username}</Text>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center' ,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding:20
  },
  teks: {
    marginTop:30,
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
  }
})


  const mapStateToProps = (state) => ({
    datas: state.data
  })

  const mapDispatchToProps = (dispatch) => bindActionCreators({
    showdatas
  }, dispatch)

  export default connect(mapStateToProps,mapDispatchToProps)(Home);
