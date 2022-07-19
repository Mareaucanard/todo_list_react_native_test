import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomePage from "../Container/Homepage"
import LoginForm from "../Container/LoginForm"
import RegisterForm from "../Container/RegisterForm"
import Profile from "../Container/Profile"
import TodoForm from "../Components/TodoForm"
import AddTodo from "../Container/AddTodo"
import SoloTodo from "../Container/SoloTodo"

const Stack = createNativeStackNavigator()

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Register" component={RegisterForm} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddTodo" component={AddTodo} />
      <Stack.Screen name="SoloTodo" component={SoloTodo} />
    </Stack.Navigator>
  )
}

export default LoginStack
