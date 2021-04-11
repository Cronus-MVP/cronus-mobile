import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Tab</Text>
    </View>
  )
}

export default ProfileScreen;