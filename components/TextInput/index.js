import React from 'react';
import { StyleSheet, Text, TextInput as TI, View } from 'react-native';

export default function TextInput(props) {
  return (
    <TI style={styles.textinput} placeholder={props.placeholder} value={props.value} onChangeText={props.onChange} />
  );
}

const styles = StyleSheet.create({
  textinput:{
      borderBottomColor:"black",
      width: "96%",
      alignSelf: "center",
      borderBottomWidth: 1,
      marginVertical: 10,
  }
});
