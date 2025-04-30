import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Home from './screens/Home'
import SignInForm from './screens/Auth/SignInForm'
import OnBoardingScreen from './screens/onBoardingScreens/OnBoardingScreen'
import SignInScreen from './screens/Auth/SignInOption'
import SignUpScreen from './screens/Auth/SignUpScreen'
import OtpScreen from './screens/Auth/OtpScreen'
import LocationEmptyScreen from './screens/AccountScreens/LocationEmptyScreen'
import AccountPreferable from './screens/AccountScreens/AccountPreferable'
import AccountPayment from './screens/AccountScreens/AccountPayment'
import UserProfileScreen from './screens/AccountScreens/UserProfileScreen'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='onBoarding' component={OnBoardingScreen} />
        <Stack.Screen name='signin' component={SignInScreen} />
        <Stack.Screen name="signinForm" component ={SignInForm} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='otpScreen' component={OtpScreen} />
        <Stack.Screen name='Location' component={LocationEmptyScreen} />
        <Stack.Screen name='Preferable' component={AccountPreferable} />
        <Stack.Screen name='Payment' component={AccountPayment} />
        <Stack.Screen name='Profile' component={UserProfileScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})


