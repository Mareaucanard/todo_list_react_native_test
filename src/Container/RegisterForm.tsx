import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { useDispatch } from "react-redux"
import { register } from "../Redux/Auth/AuthCreator"
import { useState } from "react"
import Field from "../Components/BasicField"
import Colors from "../Config/Colors"

function RegisterForm(): JSX.Element {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    name: "",
  })
  const dispatch = useDispatch()
  const Handleregister = () => {
    dispatch(register.request(form))
  }
  const NoEmptyField = (): boolean | null | undefined => {
    return !(form["email"] && form["password"] && form["firstname"] && form["name"])
  }
  function handleChange(value: string, field: string) {
    setForm({ ...form, [field]: value })
  }

  return (
    <View style={Styles.container}>
      <Field name={"email"} value={form["email"]} onChange={handleChange}/>
      <Field name={"password"} value={form["password"]} onChange={handleChange}/>
      <Field name={"firstname"} value={form["firstname"]} onChange={handleChange}/>
      <Field name={"name"} value={form["name"]} onChange={handleChange}/>
      <TouchableOpacity
        style={Styles.button}
        onPress={Handleregister}
        disabled={NoEmptyField()}
      >Register</TouchableOpacity>
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
