import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  Switch
} from "react-native";
import styles from './styles';
import { firebase } from '../../firebase/config'
import * as Icon from "react-native-vector-icons";
const { width, height } = Dimensions.get("screen");


function SettingScreen(props) {
 state={
   sort: "distance",
   type: "all",

 }

 const onLogoutPress = () => {
  firebase.auth().signOut().then(() => {
      console.log("Sign out successful!");
      props.navigation.navigate('Login');
    }).catch((error) => {
      console.log("Error: ", error);
    });
}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Tab</Text>
      <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLogoutPress()}>
                    <Text style={styles.buttonTitle}>Log out</Text>
            </TouchableOpacity>
    </View>
                 
  )
}

export default SettingScreen;