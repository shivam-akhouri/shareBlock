import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';

export default function BottomMenu(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("feed")}>
        <MaterialIcons name="dynamic-feed" size={28} color="black" />
        <Text style={styles.text}>Feed</Text>
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75%", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("addpost")}>
        <MaterialCommunityIcons name="account-search" size={28} color="black" />
        <Text style={styles.text}>search</Text>
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75%", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("chatlist")}>
        <Ionicons name='chatbox-outline' size={28} color="black" />
        <Text style={styles.text}>Chat</Text>
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75 %", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}}>
        <Entypo name='emoji-happy' size={28} color="black" />
        <Text style={styles.text}>Activity</Text>
      </TouchableOpacity>
      <View style={{width: 0.4, height: "75 %", backgroundColor: "black"}}/>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>props.navigation.navigate("profile")}>
        <MaterialCommunityIcons name="face-man-profile" size={28} color="black" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "black",
    position: 'absolute',
    bottom: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: "98%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text:{
    fontFamily: 'Mitr_300Light',
    fontSize: 12
  }
});
