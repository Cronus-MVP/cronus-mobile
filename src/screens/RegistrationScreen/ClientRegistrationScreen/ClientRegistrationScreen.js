import React, { useState, useRef } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function ClientRegistrationScreen({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onFooterLinkPress = () => {
        console.log("Here")
        navigation.navigate('Login')
    }

    const onNextPress = () => {
        // if (password !== confirmPassword) {
        //     alert("Passwords don't match.")
        //     return
        // }
        const data = {
            email,
            firstName,
            lastName,
            phone
        };
        if(checkTextInput()==true){
            console.log("HERE")
            navigation.navigate('ClientRegistrationLocation', {data})
        }
        return;
        

        
    }

    const checkTextInput = () => {
        if (!firstName.trim()) {
            alert('Please Enter First Name');
            return false;
        }else if (!lastName.trim()) {
            alert('Please Enter Last Name');
            return false;
        }else if (!email.trim()) {
            alert('Please Enter Email');
            return false;
        }else if (!phone.trim()) {
            alert('Please Enter Phone Number');
            return false;
        }
        return true;
    }

    const registerForm = () => {
        return (
            <View style={styles.card}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={styles.text}>Get started with Cronus!</Text>
                <TextInput
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
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
                    keyboardType={'email-address'}
                />
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
             <Image
                    style={styles.logo}
                    source={require('../../../../assets/cronus-logo2.png')}
                />
            <View style={styles.title}>
               {registerForm()}
            </View>
            
        </View>
    )
}
