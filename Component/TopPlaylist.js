import { StyleSheet, View,Text ,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export default class TopPlaylist extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.row1}>{this.props.playListName}</Text>
        <Text style={styles.row2}>Learn More <AntDesign name="right" size={13} color="white" /></Text>
      </TouchableOpacity>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    width:320,
    height:160,
    margin: 10,
    borderRadius:10,
    backgroundColor:'green'
  },
  row1:{
    marginTop:15,
    fontSize:20,
    fontWeight:'bold',
    marginLeft:15,
    color:'white'
  },
  row2:{
    marginTop:90,
    fontWeight:'bold',
    fontSize:15,
    marginLeft:15,
    color:'white'
  }
});
