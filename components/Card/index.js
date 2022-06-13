import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={{ width: "95%", flexDirection: "row", alignSelf: 'flex-start', alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", marginLeft: "5%", alignItems: "center" }}>

                    <Image source={require("../../assets/download5.jpg")} style={{ width: 40, height: 40, borderRadius: 25, marginRight: 10 }} />
                    <View>
                        <Text style={{ fontFamily: "mitr_regular", color:"black"}}>Shivam Akhouri</Text>
                        <Text style={{ color: "#4a4a4a", fontFamily: "mitr_extralight", fontSize: 12 }}>posted 25 mins ago</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ paddingVertical: 3, paddingHorizontal: 5, borderRadius: 3, backgroundColor: "pink" }}>
                    <Text style={{ color: "white" }}>FOLLOW</Text>
                </TouchableOpacity>
            </View>
            <Image source={require("../../assets/feeds.jpg")} style={{ marginTop: 10, width: "90%", height: "68%", borderRadius: 10 }} />
            <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", width: "100%", }}>
                <View style={{ marginLeft: "5%", paddingVertical: 3, justifyContent: "space-between", alignSelf: 'flex-start' }}>
                    <Text style={{ backgroundColor: "#a6dcf7", alignItems: "center", borderRadius: 10, width: 64, textAlign: "center" }}>🤣😛😎</Text>
                    <Text style={{ color: "#8a8a8a", marginTop: 3, fontFamily: "Mitr_300Light" }}>View Comments</Text>
                </View>
                <View style={{ flexDirection: "row", marginRight: "5%", width: "30%", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Ionicons name="md-heart-outline" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="share-social-outline" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="chatbubble-outline" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ alignSelf: "flex-end", marginRight: "5%", fontWeight: "bold" }}>169 Likes</Text>
            <Text style={{ alignSelf: "flex-end", marginRight: "5%" }}>Andi, Bandi, Shandi tagged you in the post</Text>
            <View style={{ flexDirection: "row", width:"90%", marginTop: 5, marginLeft: "5%"}}>
                <Image source={require("../../assets/download5.jpg")} style={{ width: 25, height: 25, borderRadius: 25, marginRight: 10 }} />
                <TextInput placeholder='Comment' style={{width: "80%", margin: 0, paddingVertical: 0, paddingHorizontal: 10,borderRadius: 25, backgroundColor:"#dedede"}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 550,
        width: "95%",
        alignSelf: "center",
        alignItems: "center",
        paddingBottom: 24,
        paddingTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#dedede"
    }
})