import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import BottomMenu from '../../components/BottomMenu';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchTile from '../../components/SearchTile';

const DATA = [1,2,3,34,5,6,,35,35,34,3,43,3,43,6];

export default function Search(props) {
  return (
    <View style={styles.container}>
        <LinearGradient colors={["transparent", "transparent"]} style={styles.heading}>
          <TouchableOpacity style={{padding: 7, borderRadius: 25, backgroundColor: "pink", borderWidth: 0.3, borderColor: "black"}}>
            <Ionicons name="search" size={25} color="black" />
          </TouchableOpacity>
          <TextInput style={styles.searchinput} placeholder="Search"/>
        </LinearGradient>
        <Text>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -</Text>
        <FlatList data={DATA} renderItem={(item)=><SearchTile />} style={{width:"100%", maxHeight:"79%"}} />
        <BottomMenu navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading:{
    flexDirection: "row",
    alignSelf:"flex-start",
    paddingLeft: 30,
    alignItems: "center",
    paddingTop: 15,
    width: "100%",
    paddingBottom: 2
},
headingText:{
    fontFamily: "Mitr_200ExtraLight",
    marginLeft: 20,
    fontSize: 30,
    letterSpacing: 5
},
buttontext:{
      color: "white",
      fontSize: 20,
      marginRight: 20,
      fontFamily: 'Mitr_600SemiBold'
  },
searchinput: {
    backgroundColor: "#ebebeb",
    width: "75%",
    fontSize: 17,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 0.5, 
    borderColor: "black"
}
});
