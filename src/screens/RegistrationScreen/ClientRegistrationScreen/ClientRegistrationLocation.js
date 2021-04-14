import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../firebase/config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {formatAddressString} from '../../../../utils/helper'

export default function ClientRegistrationLocation({navigation,route}) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [streetAddress2, setStreetAddress2] = useState('');
    const [addressError, setAddressError] = useState(null);
    const [countryArea, setCountryArea] = useState('');
    const [city, setCity] = useState('');
    const [showAddressFields, setShowAddressFields] = useState(true);

    const onFooterLinkPress = () => {
        navigation.navigate('ClientLogin')
    }

    const onChangeCountryArea = (text) => {
        setAddressError(null);
        setCountryArea(text);
      };
      const onChangeCity = (text) => {
        setAddressError(null);
        setCity(text);
      };
      const onChangePostalCode = (text) => {
        setAddressError(null);
        setPostalCode(text);
      };
      const onChangeStreetAddress = (text) => {
        setAddressError(null);
        setStreetAddress(text);
      };
      const onChangeStreetAddress2 = (text) => {
        setAddressError(null);
        setStreetAddress2(text);
      };

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    firstName,
                    lastName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('ClientHome', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    console.log("DATA: ",route.params.data)
    console.log(countryArea)

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/cronus-logo.png')}
                />
                <Text style={styles.text}>Almost there!</Text>
                <GooglePlacesAutocomplete
                placeholder='Search'
                style={styles.input}
                onPress={(data, details = null) => {
                    const address_dict = formatAddressString(details.adr_address)
                    console.log("Address", address_dict)
                    setStreetAddress(address_dict.streetAdress || '')
                    setCountryArea(address_dict.region || '')
                    setPostalCode(address_dict.postalCode || '')
                    setCity(details.vicinity || '')
                    setShowAddressFields(true)
                }}
                listViewDisplayed={null}
                fetchDetails={true}
                query={{
                    key: 'AIzaSyCn0kzbqXQnY6HV34Z4d2fbjuwRHtcOrnI',
                    language: 'en',
                    components: 'country:us',
                }}
                // styles={{
                // textInputContainer: {
                //     ...styles.input
                // },
                // predefinedPlacesDescription: {
                //     color: '#1faadb',
                // },
                // container: {
                //     width: styles.input
                // }
                // }}
                />
                {showAddressFields ? (
                <>
                <TextInput
                onChangeText={(text)=>onChangeStreetAddress(text)}
                tempValue={streetAddress}
                errorMessage={addressError}
                style={styles.input}
                placeholder={!streetAddress ? 'Street Address' : null}
                value = {streetAddress}
                />
                <TextInput
                onChangeText={(text)=>onChangeStreetAddress2(text)}
                tempValue={streetAddress2}
                errorMessage={addressError}
                style={styles.input}
                placeholder={'Street Address 2'}
                value = {streetAddress2}
                />
                <TextInput
                onChangeText={(text)=>onChangeCity(text)}
                tempValue={city}
                errorMessage={addressError}
                style={styles.input}
                placeholder={!city ? 'City' : null}
                value = {city}
                />
                <TextInput
                onChangeText={(text)=>onChangeCountryArea(text)}
                tempValue={countryArea}
                errorMessage={addressError}
                style={styles.input}
                placeholder={!countryArea ? 'State' : null}
                value = {countryArea}
                />
                <TextInput
                onChangeText={(text)=>onChangePostalCode(text)}
                tempValue={postalCode}
                errorMessage={addressError}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder={!postalCode ? 'Zip code' : null}
                value = {postalCode}
                />
                </>) : null}
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={() => navigation.navigate('ClientRegistrationScreen')}>
                    <Text style={styles.buttonTitleNext}>Back</Text>
                </TouchableOpacity>
                
            </KeyboardAwareScrollView>
        </View>
    )
}
