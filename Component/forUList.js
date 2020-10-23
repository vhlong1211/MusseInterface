import { StyleSheet, View,Text ,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class ForUList extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.row1}>{this.props.song}</Text>
        <View style={styles.row2}>
            <Text style={{flex:1,color:'white'}}>{this.props.singer}</Text>
            <Text style={{flex:2,color:'white'}}> {this.props.view}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    width:320,
    height:270,
    margin: 10,
    borderRadius:10,
    backgroundColor:'green'
  },
  row1:{
    marginTop:200,
    fontSize:23,
    fontWeight:'bold',
    marginLeft:20,
    color:'white'

  },
  row2:{
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    marginLeft:20
  }
});
