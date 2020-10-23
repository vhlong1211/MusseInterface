import { StyleSheet, View,Text ,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class ExploreList extends Component {
  render() {
    console.log(this.props.index)
    return (
      <TouchableOpacity style={styles.butt1}>
        <Text style={this.props.index%2?styles.buttext1:styles.buttext2}>{this.props.explore}</Text>
      </TouchableOpacity>
    );
  }
}
 
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  butt1:{
    display: 'flex',
    marginTop:30,
    marginLeft:20,
    height: 62,
    //width:'auto',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: 'white',
    //  shadowColor: 'black',
    //  shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },
  buttext1:{
    fontWeight:'bold',
    fontSize:17,
    color:'red',
    marginLeft:15,marginRight:15
  },
  buttext2:{
    fontWeight:'bold',
    fontSize:17,
    color:'blue',
    marginLeft:15,marginRight:15
  }
});
