import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Image, FlatList, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showlist } from './../store/data/data.action'

class ListIg extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      modalVisible: false,
      detail:{}
    }
  };
  setModalVisible(visible,iddata) {
    if (iddata){
      for (let i=0;i< this.props.datalist.length;i++){
        if (this.props.datalist[i].id === iddata){
          this.setState({
            modalVisible: visible,
            detail:this.props.datalist[i]
          });
        }
      }
    } else{
      this.setState({
        modalVisible: visible,
      });
    }

  }
  componentDidMount() {
    this.props.showlist()
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text style={{fontSize:20,marginBottom:20}}>{this.state.detail.caption ? this.state.detail.caption.text:""}</Text>
                <Button
                  onPress={()=>this.setModalVisible(!this.state.modalVisible)}
                  title="back"
                  color="#841584"
                />
            </View>
          </View>
        </Modal>
      </View>
        <FlatList
          data={this.props.datalist}
          numColumns={3}
          keyExtractor = {(items, index) => index.toString()}
          renderItem={({item}) =>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true,item.id);
            }}
            style = {styles.itemlist} >
            <Image
              source={{uri: item.images.thumbnail.url}}
              style = {styles.item} >
            </Image>
          </TouchableHighlight>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap:'wrap'
  },
  item: {
    width:'100%',
    height:100,
    margin:5,
    borderRadius: 2
  },
  itemlist: {
    width:'30%',
    height:100,
    margin:5,
    borderRadius: 2
  }
})

const mapStateToProps = (state) => ({
  datalist: state.data.list
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showlist
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ListIg);
