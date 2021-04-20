import React, { useEffect, useState } from 'react'
import {StatusBar} from 'expo-status-bar'
import { FlatList, Keyboard, Text, TouchableOpacity, View} from 'react-native'
import styles from './styles';
import { firebase } from '../../../firebase/config'
// import {MainStackNavigator} from '../../navigation/MainStackNavigator'
import MapView from 'react-native-maps';

export default function ClientHomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    // console.log("Props: ", props);
    // const userID = route.params.data.id;
    // const userName = route.params.data.firstName;

    console.log("Props: ",props)

    // useEffect(() => {
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
    // }, [])

    
    // const renderEntity = ({item, index}) => {
    //     return (
    //         <View style={styles.entityContainer}>
    //             <Text style={styles.entityText}>
    //                 {index}. {item.text}
    //             </Text>
    //         </View>
    //     )
    // }

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
            {/* <Text style={styles.text}>Client Home</Text>
            <View style={styles.formContainer}>
                <Text h1>Hi!</Text>
            </View> */}
            {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLogoutPress()}>
                    <Text style={styles.buttonTitle}>Log out</Text>
            </TouchableOpacity> */}
            <MapView
                style = {styles.map}
                // provide= {MapView.PROVIDER_GOOGLE}
                // showsUserLocation
                // initialRegion={{
                // latitude: 37.78825,
                // longitude: -122.4324,
                // latitudeDelta: 0.0922,
                // longitudeDelta: 0.0421}}
            />
            {/* <StatusBar style = 'auto'/> */}
            {/* { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )} */}
        </View>
        
    )
}
