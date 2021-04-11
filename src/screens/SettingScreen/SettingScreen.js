import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function SettingScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Tab</Text>
    </View>
  )
}

export default SettingScreen;