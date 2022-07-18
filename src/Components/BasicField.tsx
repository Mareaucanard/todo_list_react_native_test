import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import Capitalize from "../Utils/Capitalize"

interface Props {
  name: string
  value: string
  onChange: ((arg0: string, arg1: string) => void)|((arg0: string) => void)
  containerStyle?: object
  textStyle?: object
  inputStyle?: object
}

function Field(props: Props): JSX.Element {
  const { name, value, containerStyle, textStyle, inputStyle, onChange } = props
  return <View style={[styles.field, containerStyle]}>
    <Text style={[styles.fieldName, textStyle]}>{Capitalize(name)}: </Text>
    <TextInput style={[styles.inputBox, inputStyle]} value={value} onChangeText={(newText) => onChange(newText, name)}/>
  </View>
}

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    marginBottom: 4,
  },
  fieldName: {},
  inputBox: {
    borderWidth: 1,
    flex: 1,
  },
})
export default Field
