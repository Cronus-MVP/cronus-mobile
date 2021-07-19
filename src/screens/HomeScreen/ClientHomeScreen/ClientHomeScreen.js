import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View, Title, Paragraph, ScrollView, SafeAreaView, KeyboardAwareScrollView} from 'react-native'
import { ActivityIndicator, Headline, Subheading, Appbar } from 'react-native-paper';
import { Card, CardTitle, CardAction, CardImage, CardContent } from 'react-native-material-cards'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import styles from './styles';
import { firebase } from '../../../firebase/config'
import CardView from 'react-native-cardview'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ClientHomeScreen(props) {
    const [vendorData, setVendorData] = useState([])
    const [loading, setLoading] = useState(true)


    const onBookingPress = async(vendor) => {
      try {
        await AsyncStorage.setItem('@user_Id', props.route.params.user.id)
      } catch (e) {
        // saving error
      } 
      props.navigation.navigate('BookingScreen', {user: props.route.params.user, vendor: vendor})
    }

    useEffect(() => {
      vendorData?(
        getVendorData().then(vendor=>{
          console.log("Vendor Data in Use Effect: ")
          // showVendors()
        } 
        )
      ): null
    }, [])

    
    async function getVendorData() {
      const vendors = firebase.firestore().collection('vendors')
      var tempDoc = []
      vendors.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            tempDoc.push({ id: doc.id, ...doc.data() })     
          })
          setVendorData(tempDoc)
          console.log("Inside query Snapshot: ",tempDoc)
       })
       setLoading(false)
  }
    

  return (
    loading?(
      console.log("Loading: ", loading),
      <View style={styles.loading}>
        <ActivityIndicator animating={true} color = '#ffd982'
               size = "large" style={styles.activityIndicatorWrapper} />
      </View>
      
    ):(
      // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      {/* <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="format-list-bulleted"
          onPress={() => console.log('Pressed archive')}
        />
        </Appbar> */}
      <Headline style={styles.titleText}>{"Welcome "+ props.route.params.user.firstName + "!"}</Headline>
      <Subheading>{'Vendors in '+ props.route.params.user.city}</Subheading>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {vendorData.map(vendor => (
        <Card style={styles.Card} key={vendor.id}>
          <CardTitle style={styles.CardTitle} title={vendor.businessName} />
          {/* <CardAction seperator={true} inColumn={false}>
            <Button onPress={()=> {onBookingPress(vendor)}}>
              <Text style={styles.appointmentText}>
              📆 Book now!
              </Text>
            </Button>

          </CardAction> */}
          {vendor.imageUrl?(
            <CardImage source={{ uri: vendor.imageUrl }} />
          ): <CardImage source={require('../../../../assets/no-vendor-icon.png')} />}
          
          <CardContent style={styles.CardContent} text={vendor.streetAddress + "\n"+ vendor.countryArea + ", "+ vendor.postalCode}/>
          <Button
            onPress= {()=>onBookingPress(vendor)}
            buttonStyle= {{backgroundColor: '#e35f22', marginBottom: 15}}
            icon={{
              name: "event",
              size: 15,
              color: "white",
            }}
            title="Book now!"
          />

            {/* <Title>{vendor.streetAddress}</Title>
            <Paragraph>{vendor.city + ", "+ vendor.countryArea + ", "+ vendor.postalCode}</Paragraph>
          </CardContent> */}
          
        </Card>
                ))
              }
    </ScrollView>
    </View>
    )
    
  )
}
