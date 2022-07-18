import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Container/Homepage";
import LoginForm from "../Container/LoginForm";
import RegisterForm from "../Container/RegisterForm";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Register" component={RegisterForm} />
      </Stack.Navigator>
  );
};

export default LoginStack
