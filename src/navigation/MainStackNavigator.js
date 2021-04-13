import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ClientHomeScreen from '../screens/HomeScreen/ClientHomeScreen/ClientHomeScreen'
import VendorHomeScreen from '../screens/HomeScreen/VendorHomeScreen/VendorHomeScreen'
import SettingScreen from '../screens/SettingScreen/SettingScreen'
import MyAppointmentScreen from '../screens/MyAppointmentScreen/MyAppointmentScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import LandingScreen from '../screens/LandingScreen/LandingScreen'
import ClientLoginScreen from '../screens/LoginScreen/ClientLoginScreen/ClientLoginScreen'
import VendorLoginScreen from '../screens/LoginScreen/VendorloginScreen/VendorLoginScreen'
import ClientRegistrationScreen from '../screens/RegistrationScreen/ClientRegistrationScreen/ClientRegistrationScreen'
import VendorRegistrationScreen from '../screens/RegistrationScreen/VendorRegistrationScreen/VendorRegistrationScreen'
import ClientRegistrationLocation from '../screens/RegistrationScreen/ClientRegistrationScreen/ClientRegistrationLocation'

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function ClientHomeStack(){
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="ClientHome"
        component={ClientHomeScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointmentScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="ClientLogin"
        component={ClientLoginScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}

function VendorHomeStack(){
  return (
    <Stack.Navigator
      initialRouteName="VendorHome"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="VendorHome"
        component={VendorHomeScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointmentScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="VendorLogin"
        component={VendorLoginScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(){
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={ClientHomeScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointmentScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(){
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={ClientHomeScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointmentScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}

function ClientRegistrationStack(){
  return (
    <Stack.Navigator
      initialRouteName="ClientRegistrationScreen"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="ClientRegistrationScreen"
        component={ClientRegistrationScreen}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="ClientRegistrationLocation"
        component={ClientRegistrationLocation}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="ClientLogin"
        component={ClientLoginScreen}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      </Stack.Navigator>
      );
}

function ClientLoginStack(){
  return (
    <Stack.Navigator
      initialRouteName="ClientLoginScreen"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="ClientLoginScreen"
        component={ClientLoginScreen}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="ClientRegistrationScreen"
        component={ClientRegistrationScreen}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="ClientHome"
        component={ClientHomeScreen}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      </Stack.Navigator>
      );
}



function MyAppointmentsStack(){
  return (
    <Stack.Navigator
      initialRouteName="MyAppointments"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={ClientHomeScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointmentScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Landing'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#ffba3b'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          },
          headerTintColor: '#ffba3b',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Landing'
          component={LandingScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='ClientLogin'
          component={ClientLoginStack}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='VendorLogin'
          component={VendorLoginScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='ClientRegistration'
          component={ClientRegistrationStack}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='ClientRegistrationLocation'
          component={ClientRegistrationLocation}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='VendorRegistration'
          component={VendorRegistrationScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='ClientHome'
          component={ClientTabNavigator}
          options={{ headerShown:false }
        }
        />
        <Stack.Screen
          name='VendorHome'
          component={VendorTabNavigator}
          options={{ headerShown:false }
        }
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export function ClientTabNavigator (){
  return (
      <Tab.Navigator
        initialRouteName="ClientHome"
        tabBarOptions={{
          activeTintColor: '#ffba3b',
        }}>
        <Tab.Screen
          name="ClientHome"
          component={ClientHomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MyAppointmentsStack"
          component={MyAppointmentsStack}
          options={{
            tabBarLabel: 'My Appointments',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="ios-calendar"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="ios-person"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="ios-settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
  ); 
}

export function VendorTabNavigator (){
  return (
      <Tab.Navigator
        initialRouteName="VendorHome"
        tabBarOptions={{
          activeTintColor: '#ffba3b',
        }}>
        <Tab.Screen
          name="VendorHome"
          component={VendorHomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-home" color={color} size={size} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="MyAppointmentsStack"
          component={MyAppointmentsStack}
          options={{
            tabBarLabel: 'My Appointments',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="ios-calendar"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="ios-person"
                color={color}
                size={size}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="ios-settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
  ); 
}
