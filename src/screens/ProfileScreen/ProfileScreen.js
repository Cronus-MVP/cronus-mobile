import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import styles from './styles';

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Elton John</Text>
          <Text style={styles.info}>phone</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Appointment History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen;