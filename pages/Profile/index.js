import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomMenu from '../../components/BottomMenu';
import LinearGradient from 'react-native-linear-gradient';

export default function Profile(props) {
  return (
    <LinearGradient colors={["transparent", 'transparent']} style={styles.container}>
        <View style={{flexDirection: "row", width: "90%", marginTop: 20}}>
            <Image source={require("../../assets/images.png")}
                style={{width:100, height: 100, borderRadius: 40,backgroundColor: '#ddd', marginRight: 20}} />
                <View>
                    <Text style={styles.name}>Shivam</Text>
                    <Text style={[styles.intro, {fontSize: 13}]}>@shivam_akhouri</Text>
                    <Text style={styles.intro}>Designer at apple Max</Text>
                </View>
                <FontAwesome name='edit' size={25} color="black" />
        </View>
        <Text>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -</Text>
        <Text style={styles.heading}>About</Text>
        <Text style={[styles.intro, {alignSelf: "flex-start", marginLeft: "7.5%"}]}>Bio: Lorem Ipsum Dolor slit</Text>
        <Text style={[styles.intro, {alignSelf: "flex-start", marginLeft: "7.5%"}]}>Portfolio: www.port.com</Text>
        <Text style={[styles.intro, {alignSelf: "flex-start", marginLeft: "7.5%"}]}>BirthDay🎈🍰: 11th April 2002</Text>
        <Text style={[styles.intro, {alignSelf: "flex-start", marginLeft: "7.5%"}]}>Status: 1+1 = 10</Text>
        <Text style={styles.heading}>Stats</Text>
        <View style={{flexDirection: "row", width: "85%", justifyContent: "space-between"}}>
            <View style={{alignItems: "center"}}>
                <Text style={styles.innerheading}>Posts</Text>
                <Fontisto name="photograph" size={45} color="#9fa1f7" />
                <Text style={styles.innerheading}>0</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.innerheading}>Followers</Text>
                <FontAwesome name="mixcloud" size={45} color="#9fa1f7" />
                <Text style={styles.innerheading }>169</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.innerheading}>Following</Text>
                <FontAwesome name="blind" size={45} color="#9fa1f7" />
                <Text style={styles.innerheading }>269</Text>
            </View>
        </View>
        <View style={styles.posts}>
            <Text style={[styles.heading, {alignSelf: "center", paddingRight: 20}]}>Highlights</Text>
        </View>
        <BottomMenu navigation={props.navigation} />
        <StatusBar />

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image:{
      width: 100,
      height: 100,
  },
  name:{
      fontFamily: 'mitr_regular',
      fontSize: 35,
  }, 
  intro:{
    fontFamily: 'mitr_extralight',
      fontSize: 15,
  },
  heading:{
    fontFamily: 'mitr_light',
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft:"7.5%",
    color: "#999",
    marginBottom: 15
  },
  innerheading:{
    fontFamily: 'mitr_semibold',
    letterSpacing: 1,
    fontSize: 13,
    marginBottom: 10
  },
  posts: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: "#ebe1f9",
      width: "100%",
      height: "100%"
  }
});
