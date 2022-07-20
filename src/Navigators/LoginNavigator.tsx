import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomePage from '../Container/Homepage';
import LoginForm from '../Container/LoginForm';
import Profile from '../Container/Profile';
import RegisterForm from '../Container/RegisterForm';

const Stack = createNativeStackNavigator()

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Register" component={RegisterForm} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default LoginStack
