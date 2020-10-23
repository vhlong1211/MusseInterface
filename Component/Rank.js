import { StyleSheet, View,Text ,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';
import Dash from 'react-native-dash';
export default class Rank extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:2}}>
                    <View style={{display:'flex',borderRadius:15,backgroundColor:'white',justifyContent: 'center',alignItems: 'center',height:40,width:40}}>
                     <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>{this.props.index}</Text>
                    </View>
                    
                    <Dash style={{width:1, height:180, flexDirection:'column',marginLeft:20}} dashColor='grey' dashLength={15} dashGap={15} />
                </View>
                
                <TouchableOpacity style={styles.card}>
                    
                    <Text style={styles.row1}>{this.props.name}</Text>
                    <Text style={styles.row2}>{this.props.artist} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        height:210
        
    },
    card: {
        flex: 1,
        width:270,
        height:160,
        margin: 10,
        flex:12,
        borderRadius:10,
        backgroundColor:'green'
      },
      row1:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginTop:110,
        marginLeft:20
      },
      row2:{
        fontSize:15,
        color:'white',
        
        marginLeft:20
      }
})