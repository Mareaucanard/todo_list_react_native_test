import React from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { AppState } from "./Redux/RootReducer"
import RegisterForm from "./Container/RegisterForm"

const mainState = ({ auth }: AppState) => ({
  token: auth.token,
  error: auth.error,
  msg: auth.msg,
  isLoading: auth.isLoading,
})

function Handlelogin(dispatch: any): void {
  dispatch()
}

export default function Main(): JSX.Element {
  const state = useSelector(mainState)

  if (state.isLoading === true) {
    return <Text>Loading</Text>
  }
  if (state.token != null && state.token != undefined) {
    return <Text>Your token is:{state.token}</Text>
  }
  return (
    <View>
      <RegisterForm/>
      <Text>Not logged in</Text>
    </View>
  )
}
