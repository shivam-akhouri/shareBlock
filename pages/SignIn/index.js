import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import TextInput from '../../components/TextInput';
import { findDoc } from '../../utils/messaging';

export default function SignIn(props) {
  const [details, setDetials] = React.useState({
    email: "",
    password: ""
  })
  return (
    <View style={styles.container}>
        {/* <ScrollView > */}
      <Image source={require("../../assets/login.png")} style={{width: 150, height: 150, marginTop:"15%",}} />
      <Text style={styles.text}>Login</Text>
      <View style={{flex: 1, width:"100%"}}>

      <TextInput placeholder="Username" value={details.email} onChange={(val)=>setDetials({...details, email: val})}/>
      <TextInput placeholder="Password" value={details.password} onChange={(val)=>setDetials({...details, password: val})}/>
        {/* </ScrollView> */}
      </View>

      <CustomButton text="Sign In" icon="chevron-right" onClick={()=>{
        // props.navigation.navigate('feed')
        // console.log(details);
        // findDoc(details.email);
      }
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    fontFamily: 'Mitr_400Regular',
    fontSize: 40,
    
    marginBottom: "35%"
  }
});
