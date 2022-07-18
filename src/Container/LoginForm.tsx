import { View, StyleSheet, Text } from "react-native"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/Auth/AuthCreator"
import { useState } from "react"
import Field from "../Components/BasicField"
import Colors from "../Config/Colors"
import { AppState } from "../Redux/RootReducer"
import Button from "../Components/BasicButton"
import { Constants } from "../Config/Constants"

const tokenState = ({ auth }: AppState) => ({
  token: auth.token,
  msg: auth.msg
})

function LoginForm({ navigation }: any): JSX.Element {
  const state = useSelector(tokenState)
  const [form, setForm] = useState({
    email: "matthieu.fraiz@frenchappweb.com",
    password: "tototiti",
  })
  const dispatch = useDispatch()
  const HandleLogin = () => {
    dispatch(login.request(form))
  }
  const NoEmptyField = (): boolean => {
    return !(form["email"] && form["password"])
  }
  function handleChange(value: string, field: string) {
    setForm({ ...form, [field]: value })
  }

  if (state.token) {
    navigation.goBack()
  }

  return (
    <View style={Styles.container}>
      <Field name={"email"} value={form["email"]} onChange={handleChange} />
      <Field
        name={"password"}
        value={form["password"]}
        onChange={handleChange}
      />
      <Button
        buttonStyle={Styles.button}
        onPress={HandleLogin}
        disabled={NoEmptyField}
        title={"Login"}
      />
      {state.msg !== undefined && <Text>{state.msg}</Text>}
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 2,
    paddingBottom: 2,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.buttons,
    borderColor: Colors.transparent,
    width: "50%",
    textAlign: "center",
    alignSelf: "center",
  },
})

export default LoginForm
