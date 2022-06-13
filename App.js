
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import ChatList from './pages/ChatList';
import Feed from './pages/Feeds';
import Profile from './pages/Profile';
import ChatPage from './pages/ChatPage';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import AddPost from './pages/AddPost';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='chatlist' screenOptions={{headerShown:false}}>
        <Stack.Screen name="welcome" component={Welcome}/>
        <Stack.Screen name="addpost" component={AddPost}/>
        <Stack.Screen name="signup" component={SignUp}/>
        <Stack.Screen name="signin" component={SignIn}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name="chatlist" component={ChatList}/>
        <Stack.Screen name="search" component={Search}/>
        <Stack.Screen name="feed" component={Feed}/> 
        <Stack.Screen name="chatpage" component={ChatPage}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 520,
    height: 520,
    marginVertical: 10,
    alignSelf: 'center',
  },
  filterSelector: {
    width: 100,
    height: 100,
    margin: 5,
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default App;