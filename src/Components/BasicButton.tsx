import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import Colors from "../Config/Colors"

interface Props {
  buttonStyle?: object
  textStyle?: object
  title: string
  onPress: () => void
  disabled?: () => boolean
}

function Button({disabled, buttonStyle, textStyle, title, onPress }: Props) {
  return (
    <TouchableOpacity disabled={(disabled === undefined) ? false : disabled()} style={[Styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[Styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttons,
    borderColor: Colors.transparent,
    borderRadius: 50,
    borderWidth: 2,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 5,
  },
  text: {
    textAlign: "center"
  }
})

export default Button
