import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator} from 'react-native';
import { Card, CardTitle, CardContent } from 'react-native-material-cards'
import { Headline } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

import { firebase } from '../../firebase/config'

function MyAppointmentScreen(props) {
  const [userId, setUserId] = useState();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);


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


  async function getAppointments() {
    const user_id = await getData()
    const appointments = firebase.firestore().collection('appointments')
    .where("client_id", "==", user_id)
      var tempDoc = []
      appointments.get().then((querySnapshot)=>{
          querySnapshot.forEach((doc) => {
            tempDoc.push({ id: doc.id, ...doc.data() })     
          })
          setAppointments(tempDoc)
       })
      setLoading(false)
  }


  useEffect(() => {
   appointments ? (
    getData().then(
      getAppointments().then(
        console.log("Appointments available")
      )
    )
   ) : (
    getData().then(
      getAppointments().then(
        console.log("Appointments not available")
      )
    )
   )
  }, [])


  return (
    loading?(
      <View style={styles.loading}>
        <ActivityIndicator animating={true} color = '#ffd982'
          size = "large" style={styles.activityIndicatorWrapper} />
      </View>
    ) : (
      (appointments && appointments.length) ? (
        <View style={styles.container}>
        <Headline style={styles.titleText}>Your Appointments</Headline>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {appointments.map(app => (
        <Card style={styles.Card} key={app.id}>
          <CardTitle style={styles.CardTitle} title={app.vendor_name} />
          <CardContent style={styles.CardContent} text={app.client_firstName + " "+ app.client_lastName + "\n"+ app.date + " at "+ app.hour + ":"+app.minute}/>
        </Card>
      ))}
        </ScrollView>
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

export default MyAppointmentScreen;