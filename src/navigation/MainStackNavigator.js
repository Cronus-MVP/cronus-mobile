import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ClientHomeScreen from '../screens/HomeScreen/ClientHomeScreen/ClientHomeScreen'
import VendorHomeScreen from '../screens/HomeScreen/VendorHomeScreen/VendorHomeScreen'
import SettingScreen from '../screens/SettingScreen/SettingScreen'
import BookingScreen from '../screens/BookingScreen/BookingScreen'
import MyAppointmentScreen from '../screens/MyAppointmentScreen/MyAppointmentScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import ExploreScreen from '../screens/ExploreScreen/ExploreScreen'
import ClientRegistrationScreen from '../screens/RegistrationScreen/ClientRegistrationScreen/ClientRegistrationScreen'
import VendorRegistrationScreen from '../screens/RegistrationScreen/VendorRegistrationScreen/VendorRegistrationScreen'
import VendorRegistrationImage from '../screens/RegistrationScreen/VendorRegistrationScreen/VendorRegistrationImage'
import VendorRegistrationLocation from '../screens/RegistrationScreen/VendorRegistrationScreen/VendorRegistrationLocation'
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
        name="BookingScreen"
        component={BookingScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
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
        name="Login"
        component={LoginScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}

function ExploreStack(){
  return (
    <Stack.Navigator
      initialRouteName="Explore"
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
        name="Explore"
        component={ExploreScreen}
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
        name="Explore"
        component={ExploreScreen}
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
        name="Login"
        component={LoginStack}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      </Stack.Navigator>
      );
}

function VendorRegistrationStack(){
  return (
    <Stack.Navigator
      initialRouteName="VendorRegistrationScreen"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="VendorRegistrationScreen"
        component={VendorRegistrationScreen}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="VendorRegistrationLocation"
        component={VendorRegistrationLocation}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="VendorRegistrationImage"
        component={VendorRegistrationImage}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginStack}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      </Stack.Navigator>
      );
}

function LoginStack(){
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#ffba3b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="ClientRegistrationScreen"
        component={ClientRegistrationStack}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="VendorRegistrationScreen"
        component={VendorRegistrationStack}
        options={{ headerShown:false, tabBarVisible:false }}
      />
      <Stack.Screen
        name="ClientHome"
        component={ClientTabNavigator}
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
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
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
          name='Login'
          component={LoginStack}
          options={{ headerShown:false }}
        />
        {/* <Stack.Screen
          name='ClientLogin'
          component={ClientLoginStack}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='VendorLogin'
          component={VendorLoginScreen}
          options={{ headerShown:false }}
        /> */}
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
          component={VendorRegistrationStack}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name='Home'
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
        initialRouteName="Home"
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
          name="ExploreStack"
          component={ExploreStack}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="navigate"
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
          name="ExploreStack"
          component={ExploreStack}
          options={{
            tabBarLabel: 'Explore',
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
