import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View,FlatList } from 'react-native';
import { Card } from "react-native-elements";
import ExploreList from './Component/exploreList.js';
import ForUList from './Component/forUList.js';
import TopPlaylist from './Component/TopPlaylist.js';
import Rank from './Component/Rank.js';
  const explore = [
  {
    
    title: "New Artist",index:1
  },
  {
    
    title: "Foklore",index:2
  },
  {
    
    title: "Suicide Song",index:3
  },
  {
    
    title: "Weird Sound",index:4
  },
  {
    
    title: "Horse Running",index:5
  },
  {
    title: "Tounge Twist",index:6
  }
];
const forU=[
  {song:'Till I collapse',singer:'Eminem',view:'5B'},
  {song:'Casablanca',singer:'Berty Higgins',view:'20m'},
  {song:'Lavien Rose',singer:'Unknown',view:'50m'},
  {song:'Waiting till the end',singer:'Linkin Park',view:'1B'}
];
const playList=[
  'Tiếng hét sư tử','Chúa ru bé ngủ','Gatsby ở Cát Bi'
];
const rank=[
  {name:'Top shade of Grey',artist:'Dakota',ind:1},
  {name:'Tomorrow Sky Hit',artist:'DJ SM',ind:2},
  {name:'Những bản nhạc bất tử với thời gian',artist:'Tổng hợp',ind:3}
]
 class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      explore: explore,
      forU:forU,
      playList:playList,
      rank:rank
    };
  }
  render(){
    return (
      <ScrollView style={styles.container}>
        <View >
          <Text style={styles.header}>Home</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.com1}>
            <Text style={styles.textMenu}>Dành cho bạn</Text>
            <View style={{marginLeft:10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.forU}
              renderItem={({ item: rowData }) => {
                return (
                  // <Card
                  //   title={null}
                  //   image={{ uri: rowData.imageUrl }}
                  //   containerStyle={{ padding: 0, width: 320,height:300 }}
                  // >
                  //   <Text style={{ marginBottom: 10 }}>
                  //     {rowData.title}
                  //   </Text>
                  // </Card>
                  <ForUList singer={rowData.singer} song={rowData.song} view={rowData.view}/>
                  
                );
              }}
              keyExtractor={(item, index) => index}
            />
            </View>
            {/* <ForUList></ForUList> */}
          </View>
          <View style={styles.com2}>
            <Text style={styles.textMenu}>Tuyển tập</Text>
            <View style={{marginLeft:10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.playList}
              renderItem={({ item: rowData }) => {
                return (
                  // <Card
                  //   title={null}
                  //   image={{ uri: rowData.imageUrl }}
                  //   containerStyle={{ padding: 0, width: 320,height:300 }}
                  // >
                  //   <Text style={{ marginBottom: 10 }}>
                  //     {rowData.title}
                  //   </Text>
                  // </Card>
                  <TopPlaylist playListName={rowData}/>
                  
                );
              }}
              keyExtractor={(item, index) => index}
            />
            </View>
          </View>
          <View style={styles.com3}>
            <Text style={styles.textMenu}>Khám phá</Text>
            <View style={{marginLeft:0}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.explore}
              renderItem={({ item: rowData }) => {
                return (
                  // <Card
                  //   title={null}
                  //   image={{ uri: rowData.imageUrl }}
                  //   containerStyle={{ padding: 0, width: 320,height:300 }}
                  // >
                  //   <Text style={{ marginBottom: 10 }}>
                  //     {rowData.title}
                  //   </Text>
                  // </Card>
                  <ExploreList explore={rowData.title} index={rowData.index}/>
                  
                );
              }}
              keyExtractor={(item, index) => index}
            />
            </View>
          </View>
          <View style={styles.com4}>
            <Text style={styles.textMenu}>Bảng xếp hạng</Text>
            <FlatList
              vertical
              showsHorizontalScrollIndicator={false}
              data={this.state.rank}
              renderItem={({ item: rowData }) => {
                return (
                  // <Card
                  //   title={null}
                  //   image={{ uri: rowData.imageUrl }}
                  //   containerStyle={{ padding: 0, width: 320,height:300 }}
                  // >
                  //   <Text style={{ marginBottom: 10 }}>
                  //     {rowData.title}
                  //   </Text>
                  // </Card>
                  <Rank name={rowData.name} artist={rowData.artist} index={rowData.ind}></Rank>                  
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7ecee',
    //mau chua chuan lam
  },
  header:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    height:100,
    lineHeight:130,
    backgroundColor:'white',
    // borderWidth:1,
    borderRadius:20,
    // borderColor:'white'
    //chua lam duoc borderradius
  },
  body:{
    
  },
  com1:{
    height:330,
    marginTop:45

  },
  com2:{
    marginTop:45,
    height:220
  },
  com3:{
    marginTop:45,
    height:125
  },
  com4:{
    marginTop:45
  },
  textMenu:{
    fontSize:26,
    fontWeight:'bold',
    marginLeft:15,
    marginBottom:10
    
  }
});

export default App;