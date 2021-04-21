import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../firebase/config';

export default function VendorRegistrationScreen({navigation}) {
    const [name, setName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const checkTextInput = () => {
        if (!name.trim()) {
            alert('Please enter your Name');
            return false;
        }else if (!businessName.trim()) {
            alert('Please enter Business Name');
            return false;
        }else if (!email.trim()) {
            alert('Please enter Email');
            return false;
        }else if (!phone.trim()) {
            alert('Please enter Phone Number');
            return false;
        }
        return true;
    }


    const onNextPress = () => {
        // if (password !== confirmPassword) {
        //     alert("Passwords don't match.")
        //     return
        // }
        const data = {
            email,
            name,
            businessName,
            phone
        };
        if(checkTextInput()==true){
            console.log("HERE")
            navigation.navigate('VendorRegistrationLocation', {data})
        }
        return;  
    }

    // const onRegisterPress = () => {
    //     if (password !== confirmPassword) {
    //         alert("Passwords don't match.")
    //         return
    //     }
    //     firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((response) => {
    //             const uid = response.user.uid
    //             const data = {
    //                 id: uid,
    //                 email,
    //                 name,
    //                 businessName,
    //             };
    //             const usersRef = firebase.firestore().collection('users')
    //             usersRef
    //                 .doc(uid)
    //                 .set(data)
    //                 .then(() => {
    //                     navigation.navigate('VendorHome', {user: data})
    //                 })
    //                 .catch((error) => {
    //                     alert(error)
    //                 });
    //         })
    //         .catch((error) => {
    //             alert(error)
    //     });
    // }

    const registerForm = () => {
        return (<View style={styles.card}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={styles.text}>Grow your business with Cronus!</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Business Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setBusinessName(text)}
                    value={businessName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {/* <TextInput
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
                /> */}
                <TextInput
                    style={styles.input}
                    placeholder='Phone'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPhone(text)}
                    value={phone}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType={'phone-pad'}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onNextPress()}>
                    <Text style={styles.buttonTitle}>Next</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/cronus-background1.jpg')} style={styles.background}>
            <View style={styles.title}>
               {registerForm()}
            </View>
        </ImageBackground>
        </View>
    )
}
