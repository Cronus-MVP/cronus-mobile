import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View, ScrollView, SafeAreaView, KeyboardAwareScrollView} from 'react-native'
import { Avatar, Button, Title, Paragraph, ActivityIndicator, Colors } from 'react-native-paper';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import styles from './styles';
import { firebase } from '../../../firebase/config'
import CardView from 'react-native-cardview'
import { material } from 'react-native-typography'


export default function ClientHomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [vendorData, setVendorData] = useState([])
    const [loading, setLoading] = useState(true)
    const [currImage, setCurrImage] = useState(null);
    

    // const vendors = firebase.firestore().collection('vendors')
    // const tempDoc = []
    //     vendors.get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //            tempDoc.push({ id: doc.id, ...doc.data() })
    //         })
    //         setVendorData(tempDoc)
    //         console.log(tempDoc)
    //      })
    //     console.log("Final: ", vendorData) 
    // const docRef = admin.firestore().collection('vendors');
    // docRef.get()
    // .then(snapshot => {
    //     let arrayR = snapshot.docs.map(doc => {
    //       return doc.data();
    //     }); 
    //     res.json(arrayR);
    //     setVendorData(arrayR)  
    //     console.log("Fetch!!")      
    // }).catch(function(error){
    //     console.log("got an error",error);        
    // })
       

    const cards = [
        {
          id: "0",
          title: "Starry Night",
          picture: require('../../../../assets/cronus-background1.jpg'),
          content: <Text>Starry Night</Text>
        },
        {
          id: "1",
          title: "Wheat Field",
          picture: require('../../../../assets/cronus-logo.png'),
          content: <Text>Wheat Field with Cypresses</Text>
        },
        {
          id: "2",
          title: "Bedroom in Arles",
          picture: require('../../../../assets/harold.jpg'),
          content: <Text>Bedroom in Arles</Text>
        }
      ]


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
              // getImageURL(doc.id, tempDoc).then(response=>{
              //   console.log("Response: ", response)
              //   tempDoc = response;
              // })
              
          //     vendors.doc(doc.id).collection("images")
          //     .get()
          //     .then(response=> {
          //   response.forEach(document=>{
          //     let index = tempDoc.findIndex(vendor=> vendor.id===doc.id)
          //     tempDoc[index] = {...tempDoc[index], imageSrc: document.get('imageUrl')}
          //   })
          // })
            
          })
          setVendorData(tempDoc)
          console.log("Inside query Snapshot: ",tempDoc)
       })
       setLoading(false)
  }


    // async function getImageURL (id,tempDoc){
    //   console.log("ID in getImageURL: ", id)
    //   firebase
    //   .firestore()
    //   .collection("vendors")
    //   .doc(id)
    //   .collection("images")
    //   .get()
    //   .then(response=> {
    //     // console.log("Image: ", response)
    //     response.forEach(document=>{
    //       //console.log("Document in images: ", document.get('imageUrl'))
    //       // images = (document.get('imageUrl'))
    //       // console.log("Images after set: ",images)
    //       // setVendorData(vendorData.map(element => element.id == id?{...element, imageSrc: document.get('imageUrl')}: element))
    //       // setCurrImage(document.get('imageUrl'));
    //       let index = tempDoc.findIndex(vendor=> vendor.id===id)
    //       console.log("ID: ", index, "Document in images: ", tempDoc[index])
    //       tempDoc[index] = {...tempDoc[index], imageSrc: document.get('imageUrl')}
    //       // tempDoc=curr
    //       setVendorData(tempDoc)
    //     })
    //   });
    //   return tempDoc;
    // }

 

    const CardList = ({ robots }) => {
      const cardsArray = robots.map(robot => (
        console.log("Name: ", robot.businessName),
        console.log("Address: ", robot.streetAddress),
        console.log("ID: ", robot.id),
        
        <CardView
        cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>
            <Text>
             {robot.businessName}
          </Text>
          </CardView>
      ));
      return (
        <View>
          {cardsArray}
        </View>
      );
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
      <Text style={styles.titleText}>Vendors Near You</Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {vendorData.map(vendor => (
        <Card style={{width: 380, marginTop: 40, marginBottom: 10}} key={vendor.id}>
          <CardTitle title={vendor.businessName} subtitle={"Contact: "+ vendor.email}/>
          <CardContent>
            <Title>{vendor.streetAddress}</Title>
            <Paragraph>{vendor.city + ", "+ vendor.countryArea + ", "+ vendor.postalCode}</Paragraph>
          </CardContent>
          {vendor.imageUrl?(
            <CardImage source={{ uri: vendor.imageUrl }} />
          ): <CardImage source={require('../../../../assets/no-vendor-icon.png')} />}
          
          <CardAction seperator={true} inColumn={false}>
            {/* <Button>Book an appointment</Button>
          </Card.Actions> */}
          <CardButton
            onPress={() => {}}
            title="Book an appointment 🗓️"
            color="blue"
          />
          {/* <CardButton
            onPress={() => {}}
            title="Later"
            color="blue"
          /> */}
          </CardAction>
        </Card>
                ))
              }
    </ScrollView>
    </View>
    
    // </SafeAreaView>
    )
    
  )
}
