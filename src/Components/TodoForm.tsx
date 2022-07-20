import React from "react"
import { useState } from "react"
import { StyleSheet, View, Text } from "react-native"

import Colors from "../Config/Colors"
import Button from "./BasicButton"
import Field from "./BasicField"
import Todo from "../Interface/Todo"

interface Props {
  onSubmit: (arg0: Todo) => void
  defaultForm: Todo
  title: string
}

function TodoForm({ onSubmit, defaultForm, title }: Props): JSX.Element {
  const items = ["not started", "todo", "in progress", "done"]
  const [form, setForm] = useState(defaultForm)
  function Change(value: any, field: string) {
    if (field === "due time") {
      field = "due_time"
    }
    setForm({ ...form, [field]: value })
  }
  function areFieldsValid() {
    if (form.title.length > 255 || form.title === "") {
      return true
    }
    if (form.description.length > 1000 || form.description === "") {
      return true
    }
    if (items.find((e) => e === form.status) === undefined) {
      return true
    }
    return false
  }

  return (
    <View style={Styles.container}>
      <Field name={"title"} value={form["title"]} onChange={Change} />
      {form.title.length > 255 && (
        <Text style={Styles.hintText}>
          Title must be less than 255 characters
        </Text>
      )}
      <Field
        name={"description"}
        value={form["description"]}
        onChange={Change}
      />
      {form.description.length > 1000 && (
        <Text style={Styles.hintText}>
          Description must be less than 1000 characters
        </Text>
      )}
      <Field name={"due time"} value={form["due_time"]} onChange={Change} />
      <Field
        name={"status"}
        value={form["status"]}
        onChange={Change}
        inputStyle={{ height: 20 }}
      />
      {items.find((e) => e === form.status) === undefined && (
        <Text style={Styles.hintText}>
          Status must be one of {items.join(", ")}
        </Text>
      )}
      <Button
        title={title}
        onPress={() => onSubmit(form)}
        disabled={areFieldsValid}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 5,
    alignItems: "center",
  },
  hintText: {
    color: "red",
  },
})

export default TodoForm
