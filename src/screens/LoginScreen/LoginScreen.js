import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
import GestureFlipView from 'react-native-gesture-flip-card';


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onVendorFooterLinkPress = () => {
        console.log(navigation.navigate, "NAVIGATION!!")
        navigation.navigate('VendorRegistration')
    }

    const onVendorLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('VendorHome', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }


    const onClientFooterLinkPress = () => {
        console.log(navigation.navigate, "NAVIGATION!!")
        navigation.navigate('ClientRegistrationScreen')
    }

    const onClientLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('clients')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('ClientHome', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    const renderFront = () => {
        return (
            <View style={styles.frontStyle}>
                <KeyboardAwareScrollView
                    style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="always">
                    <Text style={styles.text}>Welcome Back!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onClientLoginPress()}>
                        <Text style={styles.buttonTitle}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Don't have an account? <Text onPress={onClientFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
      };
      
      const renderBack = () => {
        return (
            <View style={styles.backStyle}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                 <Text style={styles.text}>Ready to grow your Business?</Text>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onVendorLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have a Business account? <Text onPress={onVendorFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
        );
      };

    return (
        
        // <View style={styles.container}>
        //     <KeyboardAwareScrollView
        //         style={{ flex: 1, width: '100%' }}
        //         keyboardShouldPersistTaps="always">
        //         <Image
        //             style={styles.logo}
        //             source={require('../../../../assets/cronus-logo.png')}
        //         />
        //         <Text style={styles.text}>Ready to book an appointment?</Text>
        //         <TextInput
        //             style={styles.input}
        //             placeholder='E-mail'
        //             placeholderTextColor="#aaaaaa"
        //             onChangeText={(text) => setEmail(text)}
        //             value={email}
        //             underlineColorAndroid="transparent"
        //             autoCapitalize="none"
        //         />
        //         <TextInput
        //             style={styles.input}
        //             placeholderTextColor="#aaaaaa"
        //             secureTextEntry
        //             placeholder='Password'
        //             onChangeText={(text) => setPassword(text)}
        //             value={password}
        //             underlineColorAndroid="transparent"
        //             autoCapitalize="none"
        //         />
        //         <TouchableOpacity
        //             style={styles.button}
        //             onPress={() => onLoginPress()}>
        //             <Text style={styles.buttonTitle}>Log in</Text>
        //         </TouchableOpacity>
        //         <View style={styles.footerView}>
        //             <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
        //         </View>
        //     </KeyboardAwareScrollView>
        // </View>
        
        <View style={styles.container}>
             <Image
                    style={styles.logo}
                    source={require('../../../assets/cronus-logo2.png')}
                />
            <View style={styles.title}>
                <GestureFlipView width={300} height={400}>
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>
            </View>
            
        </View>
    )
}
