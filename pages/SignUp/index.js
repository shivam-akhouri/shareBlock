import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import TextInput from '../../components/TextInput';

export default function SignUp() {
    const [profile, setProfile] = React.useState({
        firstname: "",
        lastname: "",
        username: "",
        birthdate: "",
        about: "",
        bio: "",
        age: "",
        email: "",
        phonenumber: ""
    })
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Sign Up</Text>
            <View style={{ flex: 1, width: "100%" }} >
                <TextInput placeholder="First Name" value={profile.firstname} onChange={(val)=>setProfile({...profile, firstname: val})}/>
                <TextInput placeholder="Last Name" value={profile.lastname} onChange={(val)=>setProfile({...profile, lastname: val})}/>
                <TextInput placeholder="username" value={profile.username} onChange={(val)=>setProfile({...profile, username: val})}/>
                <TextInput placeholder="Age" value={profile.age} onChange={(val)=>setProfile({...profile, age: val})}/>
                <TextInput placeholder="Birth Date" value={profile.birthdate} onChange={(val)=>setProfile({...profile, birthdate: val})} />
                <TextInput placeholder="about" value={profile.about} onChange={(val)=>setProfile({...profile, about: val})}/>
                <TextInput placeholder="bio" value={profile.bio} onChange={(val)=>setProfile({...profile, bio: val})}/>
                <TextInput placeholder="Email" value={profile.email} onChange={(val)=>setProfile({...profile, email: val})}/>
                <TextInput placeholder="Phone Number" value={profile.phonenumber} onChange={(val)=>setProfile({...profile, phonenumber: val})}/>
            </View>

            <CustomButton text="Create Account" icon="chevron-right" onClick={()=>console.log(profile)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        minHeight: "100%"
        // justifyContent: 'center',
    },
    text: {
        fontFamily: 'mitr_regular',
        fontSize: 40,
        marginTop: "5%",
        marginBottom: "15%"
    }
});
