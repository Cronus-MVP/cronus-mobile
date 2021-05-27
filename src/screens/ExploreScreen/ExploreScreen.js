import React, { useEffect, useState } from 'react'
import {StatusBar} from 'expo-status-bar'
import { ScrollView, Animated, View, Dimensions} from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {formatAddressString, getRegionForCoordinates} from '../../../utils/helper'
import * as Location from 'expo-location';

// import {MainStackNavigator} from '../../navigation/MainStackNavigator'
import MapView from 'react-native-maps';

export default function ExploreScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [location, setLocation] = useState(null);
    const [long, setLong] = useState(43.1281419);
    const [lat, setLat] = useState(-122.999999);
    const [longDelta, setLongDelta] = useState(0.0922);
    const [latDelta, setLatDelta] = useState(0.0421);

    const [region, setRegion] = useState({
        longitude: 43.129796,
        latitude: -77.6369222,
        longitudeDelta: 0.0034,
        latitudeDelta: 0.0922
    })



    useEffect(() => {
        if(location){
            // const window = Dimensions.get('window');
            // const { width, height }  = window
            // const latD = 0.0122
            // const longD = latD + (width / height)
            // setLong(location.lng)
            // setLat(location.lat)
            // setLongDelta(longD)
            // setLatDelta(latD)
            console.log("Lat D: ", latD, "Long D: ", longD)
            // setRegion({
            //     longitude: location.lng,
            //     latitude: location.lat,
            //     longitudeDelta: longD,
            //     latitudeDelte: latD
            // })
        }
      }, []);
    
    // const onSearchPress = (details) => {
    //     setLocation(details.geometry.location)
    // }

    return (
        <View style={styles.container}>
            <MapView
                style = {styles.map}
                region={region}
                // showsUserLocation = {true}
                // followsUserLocation = {true}
                // showsMyLocationButton = {true}
                // showsCompass = {true}
                // onRegionChangeComplete={region => setRegion(region)}
            >

         {/* <MapView.Marker
            coordinate={{latitude: region.latitude,
            longitude: region.longitude}}
            title={"title"}
            description={"description"}
            /> */}
            </MapView>

            <View style={{ position: 'absolute', top: 10, width: '100%', paddingTop: 20 }}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                style={styles.input}
                onPress={(data, details, geometry = null) => {
                    const address_dict = formatAddressString(details.adr_address)
                    console.log("Geo", details.geometry.location)
                    const window = Dimensions.get('window');
                    const { width, height }  = window
                    const latD = 0.0922
                    const longD = latD + (width / height)
                    // setRegion({
                    //     longitude: details.geometry.location.lng,
                    //     latitude: details.geometry.location.lat,
                    //     longitudeDelta: longD,
                    //     latitudeDelte: latD
                    // })
                    console.log("REGION: ", region)

                    // onSearchPress(details)
                }}
                listViewDisplayed={null}
                fetchDetails={true}
                query={{
                    key: 'AIzaSyCn0kzbqXQnY6HV34Z4d2fbjuwRHtcOrnI',
                    language: 'en',
                    components: 'country:us',
                }}
                styles={{
                    textInput: styles.TextInput,
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                  }}
                />
            </View>
        </View>
        
    )
}
