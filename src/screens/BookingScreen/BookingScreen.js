import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, View, ScrollView, KeyboardAwareScrollView} from 'react-native'
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import { TimePicker } from 'react-native-simple-time-picker';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import styles from './styles';
import { firebase } from '../../firebase/config'

export default function BookingScreen(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState('')
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    
    const handleChange = (value) => {
        setHours(value.hours);
        setMinutes(value.minutes);
    };
    console.log("Props: ", props)

    const saveDate = (day) => {
        setDate(day)
        setModalVisible(true)
        console.log("Date: ", day)
    }

    const makeAppointment = () => {
        // console.log("Props: ",)
        firebase.firestore().collection('appointments').add({
            vendor_id: props.route.params.vendor.id,
            vendor_name: props.route.params.vendor.businessName,
            date: date.dateString,
            hour: hours,
            minute: minutes,
            client_id: props.route.params.user.id,
            client_firstName: props.route.params.user.firstName,
            client_lastName: props.route.params.user.lastName,
            // client_id: props.route.params.user.id,
            // client_firstName: props.route.params.user.firstName,
            // client_lastName: props.route.params.user.lastName
          }).then(response => {
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Appointment successfully created!',
                text2: '👋',
                visibilityTime: 20,
                autoHide: true,
                bottomOffset: 40,
                bottomOffset: 40,
                // onShow: () => {},
                onHide: () => {props.navigation.navigate('ClientHome')},
                onPress: () => {}
              })

           }).catch(error => {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Appointment not saved!',
                text2: 'Try again!',
                visibilityTime: 1000,
                autoHide: true,
                bottomOffset: 40,
                bottomOffset: 40,
                // onShow: () => {},
                onHide: () => {props.navigation.navigate('ClientHome')},
                onPress: () => {}
              }) 
           }) 
     }

    return (
        <View style={styles.container}>
        <Text style={styles.text}>{props.route.params.vendor.businessName}</Text>
        <Text style={styles.subText}>Pick a day!</Text>
        <Calendar
          onDayPress={(day) => {saveDate(day)}}
          style={styles.calendar}
          hideExtraDays
          enableSwipeMonths={true}
          style={{
            marginTop: 20,
            borderWidth: 2,
            borderColor: '#3d3b36',
            height: 400,
            width: 350
          }}
        //   markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: '#ffba3b',
            todayTextColor: '#ffba3b',
            arrowColor: '#ffba3b',
          }}
        />
        <Button style={styles.cancelButton} onPress={()=> {props.navigation.navigate('ClientHome')}}>
                <Text style={styles.cancelButtonText}>Back</Text>
        </Button>
        <Modal 
            animationType = {"slide"}
            isVisible={isModalVisible}
            backdropColor='white'
            transparent={false}
            style={{margin: 0}}
            >
            <View style={{flex: 1}}>
            <Text style={styles.text}>{"Pick a time for " + props.route.params.vendor.businessName + " on "  +date.dateString}</Text>
            <TimePicker
                value={{ hours, minutes }}
                onChange={(value)=> {handleChange(value)}}
                minutesInterval={30}
                zeroPadding
                // isAmpm
                // ampmLocalization={{
                //     am: 'AM',
                //     pm: 'PM'
                //   }}
            />
            <Button style={styles.button} onPress={()=> {makeAppointment()}}>
                <Text style={styles.buttonText}>Book now!</Text>
            </Button>
            <Button style={styles.cancelButton} onPress={()=> {setModalVisible(!isModalVisible)}}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </Button>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
        </Modal>
    </View> 
    )
}