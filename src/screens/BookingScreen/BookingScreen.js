import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View, ScrollView, SafeAreaView, KeyboardAwareScrollView} from 'react-native'
import {Calendar} from 'react-native-calendars';

import styles from './styles';
import { firebase } from '../../firebase/config'

export default function BookingScreen(props) {

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Booking Screen</Text>
        <Calendar
          onDayPress={(day) => {console.log('selected day', day)}}
          style={styles.calendar}
          hideExtraDays
        //   markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: '#ffba3b',
            todayTextColor: '#ffba3b',
            arrowColor: '#ffba3b',
          }}
        />
    </View> 
    )
}