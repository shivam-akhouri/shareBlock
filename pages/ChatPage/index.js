import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground,FlatList } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MessageTile from '../../components/MessageTile';
import LinearGradient from 'react-native-linear-gradient'

const ChatPage = () => {
    const messages=[
        {
            "message": "Kaise Ho?",
            "name": "shivam",
        },
        {
            "message": "Kaise Ho?",
            "name": "suraj",
        },
        {
            "message": "Kaise Ho?",
            "name": "shivam",
        },
        {
            "message": "thik hai",
            "name": "shivam"
        }
    ]
    const email="shivam";
    const otheremail = "Suraj";
    const [message, setMessage]  =React.useState("");
    const [chats, setChats] = React.useState(messages);
    return (
        <LinearGradient style={styles.container} colors={["#bcecf7","#7cdff7"]} start={{x:0, y:0}} end={{x:1, y:0}}>
            <View style={styles.heading}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={require("../../assets/images.png")} style={{width: 50, height: 50, borderRadius: 25}}/>
                    <View style={{marginLeft: 20,}}>
                        <Text style={styles.headingText}>Shivam Akhouri</Text>
                        <Text style={{color:"#5d5d5d"}}>Found active 25 mins ago</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <ImageBackground style={styles.chats} source={require("../../assets/background.jpg")}>
            <FlatList
                inverted
                style={{marginBottom: "5%"}}
                data={chats}
                initialNumToRender={15}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>{}} >
                        <MessageTile message={item.message} type={email==item.sender? 'sender':'receiver'} sender={email==item.sender?"You":otheremail} />
                    </TouchableOpacity>
                )}
            />
            </ImageBackground>
            <View style={styles.sendMessage}>
                <TextInput placeholder="Enter your message here!" style={styles.input} value={message} onChangeText={(val)=>setMessage(val)}/>
                <TouchableOpacity style={{ alignItems: "center", borderWidth:0.4, borderColor: "black", padding: 8, backgroundColor: "#d6fcd2", borderRadius: 20 }}
                    onPressIn={()=>{
                        setMessage("");
                    }}>
                    <Feather name="send" size={25} color="#5d5d5d" />
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: "100%",
        alignItems: "center",
        backgroundColor: "#7cdff7"
    },
    heading: {
        flexDirection: "row",
        alignSelf: "flex-start",
        paddingLeft: 30,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingRight: "5%",
        width: "100%",
        backgroundColor:"#bcecf7",
        borderColor: "green",
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headingText: {
        fontFamily: "Mitr_200ExtraLight",
        color:"#3d3d3d",
        fontSize: 18,
        fontWeight: "bold"
    },
    chats:{
        flex: 1, 
        backgroundColor: "white",
        width: "100%",
    },
    sendMessage:{
        width:"100%",
        height: 60,
        alignItems:"center",
        justifyContent:"center",
        
        flexDirection: "row", 
        alignItems:"center",
        justifyContent:"space-around"
    },
    input:{
        width: "80%",
        backgroundColor: "#efefef",
        paddingVertical: 8,
        paddingLeft: 8,
        borderRadius : 20
    }
})
export default ChatPage;