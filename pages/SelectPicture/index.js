import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

function SelectPicture() {
  const [pickedImage, setPickedImage] = useState('../../assets/car.png');
  const pickImage = ()=> {ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: true,  
  }).then(image => {
    const source = { uri: `data:${image.mime};base64,${image.data}` };
    console.log(image);
    setPickedImage(image.path);
    console.log(image.path);
  });}
  return (
    <>
    <Button title="Pick Image" onPress = {()=> pickImage()}></Button>
    <Image source = {{uri: pickedImage}} style = {{width: 200, height: 300}} />
    </>
  )
}

export default SelectPicture