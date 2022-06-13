import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <ImageBackground
                    source={require("../../assets/welcome.gif")}
                    style={{ width: "100%", height: "100%", 
                    paddingVertical: 0,flexDirection: "row",alignItems: 'center',
                    justifyContent: 'center', borderRadius: 10 }}>
                        
        <Text style={styles.buttontext}>{props.text}</Text>
        <FontAwesome5 name={props.icon} color="white" size={20} />
                    </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      width: "96%",
    flex: 1,
    maxHeight: 70,
    backgroundColor: '#4f44dba0',
    
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext:{
      color: "white",
      fontSize: 23,
      marginRight: 20,
      fontFamily: 'Mitr_600SemiBold'
  }
});
