import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function MyAppointmentScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyAppointments Tab</Text>
    </View>
  )
}

export default MyAppointmentScreen;