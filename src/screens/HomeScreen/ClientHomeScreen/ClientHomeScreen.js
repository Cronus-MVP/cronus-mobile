import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import { Card} from 'react-native-elements'
import styles from './styles';
import { firebase } from '../../../firebase/config'
import CardView from 'react-native-cardview'


export default function ClientHomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [vendorData, setVendorData] = useState([])

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

    // const entityRef = firebase.firestore().collection('entities')
    // console.log("Props: ", props);
    // const userID = route.params.data.id;
    // const userName = route.params.data.firstName;

    // console.log("Props: ",props)

    useEffect(() => {
      vendorData?(
        getVendorData().then(vendor=>{
          console.log("Vendor Data in Use Effect: ",vendor),
          showVendors()
        }
          
        )
      ): showVendors()

    //     userID?(
    //         entityRef
    //         .where("authorID", "==", userID)
    //         .orderBy('createdAt', 'desc')
    //         .onSnapshot(
    //             querySnapshot => {
    //                 const newEntities = []
    //                 querySnapshot.forEach(doc => {
    //                     const entity = doc.data()
    //                     entity.id = doc.id
    //                     newEntities.push(entity)
    //                 });
    //                 setEntities(newEntities)
    //             },
    //             error => {
    //                 console.log(error)
    //             },
    //         console.log("USER ID: ", userID),
    //         )
    //     ): console.log("Error!!")
    }, [])

    
    // const renderEntity = ({item, index}) => {
    //     return (
    //         <View style={styles.entityContainer}>
    //             <Text style={styles.entityText}>
    //                 {index}. {item.text}
    //             </Text>
    //         </View>
    //     )
    // }

    async function getVendorData() {
        const vendors = firebase.firestore().collection('vendors')
        var tempDoc = []
        const result = []
        vendors.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               tempDoc.push({ id: doc.id, ...doc.data() })
            })
            setVendorData(tempDoc)
            result = tempDoc
            console.log("Inside query Snapshot: ",tempDoc)
         })
         console.log("Final: ", result)
         return result;
        

    }

    // const onLogoutPress = () => {
    //     firebase.auth().signOut().then(() => {
    //         console.log("Sign out successful!");
    //         props.navigation.navigate('Login');
    //       }).catch((error) => {
    //         console.log("Error: ", error);
    //       });
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
    <View style={styles.container}>
      <Text style={styles.text}>Client Home Screen</Text>
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
