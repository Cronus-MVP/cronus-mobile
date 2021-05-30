import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../../firebase/config';
import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';


export default function VendorRegistrationImage({navigation, route}) {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    console.log("Data in Vendor Image: ",route.params.user.city)

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

    const uploadImage = async(uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child(`images/${route.params.user.id}`);
        console.log("Reference: ", ref)
        ref.put(blob).then((snapshot)=>{
            console.log(`Image has been successfully uploaded.`);
            getDownloadURL();
        })
      }
    
    const getDownloadURL = async() => {
        let imageRef = firebase.storage().ref('images/' + route.params.user.id);
        imageRef
        .getDownloadURL()
        .then((url) => {
            firebase.firestore().collection('vendors').doc(route.params.user.id).collection('images').add({
                imageUrl: url
            })
            //from url you can fetched the uploaded image easily
            //this.setState({profileImageUrl: url});
        })
        .catch((e) => console.log('getting downloadURL of image error => ', e));
    }






return (
<View style={styles.container}>
<Text style={styles.text}>Last Step - Choose your Business picture!</Text>
 <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
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
</View>
</View>
)
}