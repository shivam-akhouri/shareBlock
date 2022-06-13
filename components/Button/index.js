import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Text style={styles.buttontext}>{props.text}</Text>
        <FontAwesome5 name={props.icon} color="white" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      width: "96%",
    flex: 1,
    maxHeight: 60,
    backgroundColor: '#4f44dba0',
    flexDirection: "row",
    borderRadius: 10,
    margin: 5,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext:{
      color: "white",
      fontSize: 20,
      marginRight: 20,
      fontFamily: 'Mitr_600SemiBold'
  }
});
