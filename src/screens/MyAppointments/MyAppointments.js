import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function MyAppointments(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyAppointments Tab</Text>
    </View>
  )
}

export default MyAppointments