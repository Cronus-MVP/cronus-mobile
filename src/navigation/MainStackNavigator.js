import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/HomeScreen/HomeScreen'
import Settings from '../screens/Settings/Settings'
import MyAppointments from '../screens/MyAppointments/MyAppointments'
import Profile from '../screens/Profile/Profile'
import Login from '../screens/LoginScreen/LoginScreen'
import Registration from '../screens/RegistrationScreen/RegistrationScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home'

  switch (routeName) {
    case 'Home':
      return 'Home'
    case 'Profile':
      return 'Profile'
    case 'MyAppointments':
        return 'MyAppointments'
  }
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#101010',
        style: {
          backgroundColor: '#ffd700'
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          if (route.name == 'Home') {
            iconName = 'ios-home'
          } else if (route.name == 'Profile') {
            iconName = 'ios-person'
          }else if (route.name == 'MyAppointments') {
            iconName = 'ios-person'
          }
          return <Ionicons name={iconName} color={color} size={size} />
        }
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='MyAppointments' component={MyAppointments} />
    </Tab.Navigator>
  )
}


function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name='Registration'
          component={Registration}
          options={{ title: 'Registration' }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }
        }
        />
        {/* <Stack.Screen
          name='MyAppointments'
          component={MyAppointments}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        /> */}
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Settings' }}
        />
        {/* <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ title: 'Profile' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator