import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View, Title, Paragraph, ScrollView, SafeAreaView, KeyboardAwareScrollView} from 'react-native'
import { Button, ActivityIndicator, Headline } from 'react-native-paper';
import { Card, CardTitle, CardAction, CardImage, CardContent } from 'react-native-material-cards'
 
import styles from './styles';
import { firebase } from '../../../firebase/config'
import CardView from 'react-native-cardview'


export default function ClientHomeScreen(props) {
    const [vendorData, setVendorData] = useState([])
    const [loading, setLoading] = useState(true)

    const onBookingPress = () => {
      props.navigation.navigate('BookingScreen')
    }

    useEffect(() => {
      vendorData?(
        getVendorData().then(vendor=>{
          console.log("Vendor Data in Use Effect: ",vendor),
          showVendors()
        } 
        )
      ): showVendors()
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
    
    const showVendors = () => {
      console.log("In Show Vendors - Vendor Data: ", vendorData)
        return (
          <View style={styles.container}>
              {vendorData.map(vendor => (
                <CardView
                cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={5}>
                    <Text>
                    {vendor.businessName}
                  </Text>
                  </CardView>
                  ))
                }
          </View>
        )
      }

  return (
    loading?(
      console.log("Loading: ", loading),
      <View style={styles.loading}>
        <ActivityIndicator animating={true} style={styles.activityIndicatorWrapper} />
      </View>
      
    ):(
      // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Headline style={styles.titleText}>Open Vendors</Headline>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {vendorData.map(vendor => (
        <Card style={styles.Card} key={vendor.id}>
          <CardTitle style={styles.CardTitle} title={vendor.businessName} />
          <CardAction seperator={true} inColumn={false}>
            <Button onPress={onBookingPress}>
              <Text style={styles.appointmentText}>
              📆 Book now!
              </Text>
            </Button>

          </CardAction>
          {vendor.imageUrl?(
            <CardImage source={{ uri: vendor.imageUrl }} />
          ): <CardImage source={require('../../../../assets/no-vendor-icon.png')} />}
          
          <CardContent style={styles.CardContent} text={vendor.streetAddress + "\n"+ vendor.countryArea + ", "+ vendor.postalCode}/>
            {/* <Title>{vendor.streetAddress}</Title>
            <Paragraph>{vendor.city + ", "+ vendor.countryArea + ", "+ vendor.postalCode}</Paragraph>
          </CardContent> */}
          
        </Card>
                ))
              }
    </ScrollView>
    </View>
    
    // </SafeAreaView>
    )
    
  )
}
