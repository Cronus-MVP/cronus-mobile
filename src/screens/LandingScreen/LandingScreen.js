import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';

function LandingScreen({navigation}) {

    const onPersonalPress = () => {
        console.log(navigation.navigate, "NAVIGATION!!")
        navigation.navigate('ClientLogin')
    }

    const onBusinessPress = () => {
        console.log(navigation.navigate, "NAVIGATION!!")
        navigation.navigate('VendorLogin')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Take me to..</Text>

        <TouchableOpacity
            style={styles.button}
            onPress={() => onPersonalPress()}>
            <Text style={styles.buttonTitle}>My Personal Account</Text>
        </TouchableOpacity>

    {/* <Text style={styles.text}>Or</Text> */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => onBusinessPress()}>
            <Text style={styles.buttonTitle}>My Business Account</Text>
        </TouchableOpacity>



    </View>
  )
}

export default LandingScreen;