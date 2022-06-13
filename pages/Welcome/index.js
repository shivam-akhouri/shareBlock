import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import Button from '../../components/Button';
import { useFonts, Mitr_400Regular, Mitr_700Bold, Mitr_600SemiBold, Mitr_200ExtraLight, Mitr_300Light, Mitr_500Medium } from '@expo-google-fonts/mitr';
import AppLoading from 'expo-app-loading';

export default function Welcome(props) {
    let [fontsLoaded] = useFonts({
        Mitr_200ExtraLight,
        Mitr_300Light,
        Mitr_400Regular,
        Mitr_500Medium,
        Mitr_600SemiBold,
        Mitr_700Bold
    })
    if (!fontsLoaded) {
        return <AppLoading />
    } else {

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/welcome.gif")}
                    style={{ width: "100%", height: "100%" }}>
                    <LinearGradient
                        style={
                            styles.linearGradient
                        }
                        colors={['transparent', 'pink']}>
                        <Text style={styles.text}>
                            Welcome to
                        </Text>
                        <Text style={styles.text2}>
                            ShareBlock
                        </Text>
                        <View style={{ flexDirection: "row", width: "100%", position: "absolute", bottom: "5%" }}>
                            <Button text="Sign Up" icon="file-signature" onClick={()=>props.navigation.navigate("signup")}/>
                            <Button text="Sign In" icon="sign-in-alt" onClick={()=>props.navigation.navigate("signin")}/>
                        </View>
                    </LinearGradient>
                </ImageBackground>
                <StatusBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "40%",
        // alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        color: "white",
        marginLeft: "5%",
        fontSize: 25,
        fontFamily: 'Mitr_400Regular'
    },
    text2: {
        color: "white",
        marginLeft: "5%",
        fontSize: 50,
        fontFamily: 'Mitr_700Bold'
    }
});
