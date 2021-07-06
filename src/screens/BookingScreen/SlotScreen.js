import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View, ScrollView, SafeAreaView, KeyboardAwareScrollView} from 'react-native'
import {Calendar} from 'react-native-calendars';

import styles from './styles';
import { firebase } from '../../firebase/config'

export default function SlotScreen(props) {

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Slot Screen</Text>
    </View> 
    )
}