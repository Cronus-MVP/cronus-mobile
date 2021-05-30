import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../firebase/config';
import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';


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

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
        }
          
        setSelectedImage({ localUri: pickerResult.uri });
        }

        // if (selectedImage !== null) {
        //     return (
        //       <View style={styles.container}>
        //         <Image
        //           source={{ uri: selectedImage.localUri }}
        //           style={styles.thumbnail}
        //         />
        //       </View>
        //     );
        //   }

    //   const uploadImage = async (uri) => {
    //     // const { uri } = selectedImage.localUri;
    //     console.log("URI of image: ", uri)
    //     const filename = uri.substring(uri.lastIndexOf('/') + 1);
    //     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    //     setUploading(true);
    //     setTransferred(0);
    //     const task = storage()
    //       .ref(filename)
    //       .putFile(uploadUri);
    //     // set progress state
    //     task.on('state_changed', snapshot => {
    //       setTransferred(
    //         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
    //       );
    //     });
    //     try {
    //       await task;
    //     } catch (e) {
    //       console.error(e);
    //     }
    //     setUploading(false);
    //     Alert.alert(
    //       'Photo uploaded!',
    //       'Your photo has been uploaded to Firebase Cloud Storage!'
    //     );
    //     setImage(null);
    //   };

    const uploadImage = async(uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("images/name.jpg");
        console.log("Reference: ", ref)
        return ref.put(blob);
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

                    {/* <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                        <Text style={styles.buttonText}>Pick a photo</Text>
                    </TouchableOpacity>
                <View style={styles.imageContainer}>
                    {selectedImage !== null ? (
                    <Image source={{ uri: selectedImage.localUri }} style={styles.imageBox} />
                    ) : null}
                    {uploading ? (
                    <View style={styles.progressBarContainer}>
                        <Progress.Bar progress={transferred} width={300} />
                    </View>
                    ) : (
                    selectedImage !== null ?(
                    <TouchableOpacity style={styles.uploadButton} onPress={()=>uploadImage(selectedImage.localUri)}>
                        <Text style={styles.buttonText}>Upload image</Text>
                    </TouchableOpacity>
                    ): null
                    )}
                </View> */}



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
