import React from "react"
import { Text, View, StyleSheet } from "react-native"

import Todo from "../Interface/Todo"
import DateToFancy from "../Utils/DateToFancy"

interface Props {
  todo: Todo
}

function TodoElem({ todo }: Props): JSX.Element {
  return (
    <View style={Styles.todoBox}>
      <Text style={Styles.title}>{todo.title}</Text>
      <Text style={Styles.description}>{todo.description}</Text>
      <Text style={Styles.date_text}>
        Created on {DateToFancy(todo.created_at)}
      </Text>
      <Text style={Styles.date_text}>Due the {DateToFancy(todo.due_time)}</Text>
      <Text style={Styles.status}>{todo.status}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  todoBox: {
    marginBottom: 20,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 3,
    paddingStart: 5,
    paddingBottom: 3,
  },
  title: {
    fontSize: 30,
    textaligne: "center",
    fontStyle: "italic",
    alignSelf: "center",
  },
  description: {
    marginBottom: 8,
  },
  status: {
    color: "red",
    marginTop: 8,
    marginBottom: 5,
  },
})

export default TodoElem
