import React from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import BottomMenu from "../../components/BottomMenu";
import ChatTile from "../../components/ChatTile";

const DATA = [1,2,3,4,5,6,8,9,7,6,5];

export default function ChatList(props){
    return(
        <View style={styles.container}>
            <LinearGradient colors={["transparent", "transparent"]} style={styles.heading}>
                <Text style={styles.headingText}>Chats</Text>
                <Image source={require("../../assets/chat.png")} style={{width: 35, height: 35, marginLeft: 10}} />
            </LinearGradient>
            <Text>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -</Text>
            <FlatList data={DATA} renderItem={(item)=><ChatTile navigation={props.navigation}/>} style={{width:"100%", maxHeight:"79%"}}/>
            <StatusBar />
            <BottomMenu navigation={props.navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
      },
    heading:{
        flexDirection: "row",
        alignSelf:"flex-start",
        paddingLeft: "5%",
        alignItems: "center",
        paddingTop: 15,
        width: "100%",
        paddingBottom: 4,
    },
    headingText:{
        fontFamily: "mitr_light",
        fontSize: 30,
        letterSpacing: 5
    }
})
