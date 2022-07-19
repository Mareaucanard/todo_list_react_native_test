import React from "react"
import { useState } from "react"
import { StyleSheet, View } from "react-native"

import Colors from "../Config/Colors"
import ISOtoReadable from "../Utils/ISOToReadable"
import Button from "./BasicButton"
import Field from "./BasicField"

interface Props {
  onSubmit: (arg0: object) => void
}

function TodoForm({ onSubmit }: Props): JSX.Element {
  const items = ["not started", "todo", "in progress", "done"]
  const [form, setForm] = useState({
    title: "",
    description: "",
    due_time: ISOtoReadable(new Date()),
    status: "not started",
  })
  function Change(value: any, field: string) {
    if (field === "due time") {
      field = "due_time"
    }
    setForm({ ...form, [field]: value })
  }

  return (
    <View style={Styles.container}>
      <Field name={"title"} value={form["title"]} onChange={Change} />
      <Field
        name={"description"}
        value={form["description"]}
        onChange={Change}
      />
      <Field name={"due time"} value={form["due_time"]} onChange={Change} />
      <Field name={"status"} value={form["status"]} onChange={Change} />
      <Button title={"Create the todo!"} onPress={() => onSubmit(form)} />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 5,
  },
})

export default TodoForm
