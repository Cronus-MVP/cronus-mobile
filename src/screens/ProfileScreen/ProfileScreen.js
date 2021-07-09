import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config'



function ProfileScreen(props) {

     const onLogoutPress = () => {
        firebase.auth().signOut().then(() => {
            console.log("Sign out successful!");
            props.navigation.navigate('Login');
          }).catch((error) => {
            console.log("Error: ", error);
          });
    }
    console.log("PROPS in settings: ", props)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Elton John</Text>
          <Text style={styles.info}>phone</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Appointment History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => onLogoutPress()}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen;