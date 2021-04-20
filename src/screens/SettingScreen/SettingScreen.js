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
import * as Icon from "react-native-vector-icons";
const { width, height } = Dimensions.get("screen");


function SettingScreen(props) {
 state={
   sort: "distance",
   type: "all",

 }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Tab</Text>
    </View>
  )
}

export default SettingScreen;