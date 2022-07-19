import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { useDispatch } from "react-redux"
import { register } from "../Redux/Auth/AuthCreator"
import { useState } from "react"
import Field from "../Components/BasicField"
import Colors from "../Config/Colors"
import { useSelector } from "react-redux"
import { AppState } from "../Redux/RootReducer"
import Button from "../Components/BasicButton"
import { useEffect } from "react"
import IsConnected from "../Utils/IsConnected"

const tokenState = ({ auth }: AppState) => ({
  token: auth.token,
})

function RegisterForm({ navigation }: any): JSX.Element {
  const state = useSelector(tokenState)
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    name: "",
  })
  const dispatch = useDispatch()
  useEffect(() => {
    IsConnected(state.token) && navigation.goBack()
  }, [state.token])
  const Handleregister = () => {
    dispatch(register.request(form))
  }
  const NoEmptyField = (): boolean | null | undefined => {
    return !(
      form["email"] &&
      form["password"] &&
      form["firstname"] &&
      form["name"]
    )
  }
  function handleChange(value: string, field: string) {
    setForm({ ...form, [field]: value })
  }

  return (
    <View style={Styles.container}>
      <Field name={"email"} value={form["email"]} onChange={handleChange} />
      <Field
        name={"password"}
        value={form["password"]}
        onChange={handleChange}
        secureTextEntry={true}
      />
      <Field
        name={"firstname"}
        value={form["firstname"]}
        onChange={handleChange}
      />
      <Field name={"name"} value={form["name"]} onChange={handleChange} />
      <Button
        style={Styles.button}
        onPress={Handleregister}
        disabled={NoEmptyField}
        title={"Register"}
      />
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

export default RegisterForm
