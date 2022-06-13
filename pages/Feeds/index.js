import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, FlatList } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import BottomMenu from '../../components/BottomMenu';
import Card from '../../components/Card';
const DATA = [1,2,3]
export default function Feed(props){
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Feeds</Text>
                <Image source={require("../../assets/star.png")} style={{width: 30, height: 30, marginLeft: 10}} />
            </View>
            <Text>-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -    -   -</Text>
            <FlatList data={DATA} renderItem={(item, index)=><Card/>} style={{width: "100%", maxHeight:"79%"}}/>
            <BottomMenu navigation={props.navigation}/>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        minHeight:"100%",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    heading:{
        flexDirection: "row",
        alignSelf:"flex-start",
        paddingLeft: 30,
        alignItems: "center",
        paddingTop: 15,
        width: "100%",
        paddingBottom: 0,
    },
    headingText:{
        fontFamily: "mitr_extralight",
        fontSize: 30,
        letterSpacing: 5
    }
})