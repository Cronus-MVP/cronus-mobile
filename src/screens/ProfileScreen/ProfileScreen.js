import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity,ActivityIndicator } from 'react-native';

import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { firebase } from '../../firebase/config'


function ProfileScreen(props) {
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true)


  const getData = async () => {
    var temp = ''
    try {
      const value = await AsyncStorage.getItem('@user_Id')
      if(value !== null) {
        setUserId(value)
        temp = value
      }
    } catch(e) {
      console.log("Error reading the value")
    }
    return temp
  }


  async function getUser() {
    const user_id = await getData()
    const user = firebase.firestore().collection('clients')
    .where("id", "==", user_id)
      var tempDoc = []
      user.get().then((querySnapshot)=>{
          querySnapshot.forEach((doc) => {
            tempDoc.push({ id: doc.id, ...doc.data() })     
          })
          setUserData(tempDoc)
       })
      setLoading(false)
  }


  const onLogoutPress = () => {
    firebase.auth().signOut().then(() => {
        console.log("Sign out successful!");
        props.navigation.navigate('Login');
      }).catch((error) => {
        console.log("Error: ", error);
      });
  }


  useEffect(() => {
    getUser()
  }, [])

  return (
    loading? (
      <View style={styles.loading}>
        <ActivityIndicator animating={true} color = '#ffd982'
          size = "large" style={styles.activityIndicatorWrapper} />
      </View>
    ):(
      userData? (
        console.log("User details: ", userData),
      <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{userData[0].firstName + " "+ userData[0].lastName}</Text>
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
      ) : (
        <View style={styles.loading}>
        <ActivityIndicator animating={true} color = '#ffd982'
          size = "large" style={styles.activityIndicatorWrapper} />
      </View>
      )
      
    )
    
  )
}

export default ProfileScreen;