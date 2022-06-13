import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function MessageTile(props){
    return (
            <View style={[styles.container, {alignSelf:props.type == 'sender'? 'flex-end' : 'flex-start'}]}>
            <LinearGradient colors={props.type == 'sender' ?['#f238b7', '#f70596'] : ['#018a0a','#026918', ]} angle={-90} useAngle={true} style={{
                paddingBottom: 5,
                paddingTop: 5,
                paddingRight: 10,
                paddingLeft: 12,
                borderRadius: 12,
                borderTopRightRadius: props.type === "sender" ? 0: 12,
                borderTopLeftRadius: props.type !== "sender" ? 0: 12,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontWeight: "bold", alignSelf: props.type=='sender'?'flex-end': 'flex-start', color: '#ffff6e', fontSize: 11}}>{props.sender}</Text>
                <Text style={[styles.text, {alignSelf: props.type==="sender" ? "flex-end": "flex-start"}]}>{props.message}</Text> 
            </LinearGradient>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        maxWidth: "80%",
        marginRight: 10,
        marginTop: 5,
        marginLeft:10,
        borderRadius: 15
    },
    text:{
        fontSize: 13,
        color:'#fff',
    },
})