import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { View, Image, StyleSheet, Text, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import {useState} from 'react';

export default function SearchTile(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <View style={styles.container}>
            <Image source={require("../../assets/images.png")} style={styles.image} />
            <View>
                <Text style={styles.title}>Shivam Akhouri</Text>
                <Text style={styles.lastmsg}>Active 30m ago</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity style={{ borderWidth: 0.3, borderColor: "black", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: "#d6fcd2", borderRadius: 5 }}>
                    <Text style={{fontFamily: "Mitr_300Light", fontSize: 10}}>Catch Up!  </Text>
                    <Feather name="send" size={10} color="#5e5e5e" />
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "94%",
        marginTop: 5,
        marginBottom: 5,
        height: 55,
        alignSelf:"center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        marginRight: 20
    },
    title: {
        fontFamily: "Mitr_400Regular",
        fontSize: 16
    },
    lastmsg: {
        fontFamily: "Mitr_200ExtraLight",
        color: "#aeaeae"
    },
    center:{
        alignSelf:"center",
        width: "70%",
        height: "40%",
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: "60%",
        elevation: 200
    },
    heading:{
        alignSelf: "center",
        fontFamily: "Mitr_400Regular",
        fontSize: 17,
        color: "#3d3d3d",
        width: "100%",
        textAlign: "center",
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#ebe1f9"
    },
    textbutton:{
        width: "100%",
        textAlign:"center",
        paddingVertical: 15,
        fontFamily: "Mitr_300Light",
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center"
    }
})