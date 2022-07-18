import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { useDispatch } from "react-redux"
import { login } from "../Redux/Auth/AuthCreator"
import { useState } from "react"
import Field from "../Components/BasicField"
import Colors from "../Config/Colors"

function RegisterForm(): JSX.Element {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const HandleLogin = () => {
    dispatch(login.request(form))
  }
  const NoEmptyField = (): boolean | null | undefined => {
    return !(form["email"] && form["password"])
  }
  function handleChange(value: string, field: string) {
    setForm({ ...form, [field]: value })
  }

  return (
    <View style={Styles.container}>
      <Field name={"email"} value={form["email"]} onChange={handleChange}/>
      <Field name={"password"} value={form["password"]} onChange={handleChange}/>
      <TouchableOpacity
        style={Styles.button}
        onPress={HandleLogin}
        disabled={NoEmptyField()}
      >Login</TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 2,
    paddingBottom: 2
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.buttons,
    borderColor: Colors.transparent,
    width: "50%",
    textAlign: "center",
    alignSelf: "center"
  },
})

export default RegisterForm
