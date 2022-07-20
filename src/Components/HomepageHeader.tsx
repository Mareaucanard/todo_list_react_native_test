import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useState } from "react"
import { Modal, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import AddTodo from "../Container/AddTodo"
import Todo from "../Interface/Todo"
import { logout } from "../Redux/Auth/AuthCreator"
import { AppState } from "../Redux/RootReducer"
import { TodosCreator } from "../Redux/Todos"
import { getTodos } from "../Redux/Todos/TodosCreator"
import Button from "./BasicButton"

const TodosState = ({ todos, profile }: AppState) => ({
  loading: todos.isLoading,
  id: profile.id,
  todos: todos.todos,
  error: todos.error,
})

function HomepageHeader(): JSX.Element {
  const [isModalOpen, setModal] = useState(false)
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const state = useSelector(TodosState)

  function onSubmitAdd(form: Todo) {
    dispatch(
      TodosCreator.createTodo.request({ todo: { ...form, user_id: state.id } })
    )
    setModal(false)
  }

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => {
          setModal(false)
        }}
      >
        <AddTodo viewStyle={Styles.modal} onSubmit={onSubmitAdd} />
      </Modal>
      <View style={Styles.container}>
        <Button onPress={() => setModal(true)} title={"Add a todo"}></Button>
        <Button onPress={() => navigate("Profile")} title={"Profile"} />
        <Button onPress={() => dispatch(logout.request({}))} title={"Logout"} />
        <Button
          onPress={() => dispatch(getTodos.request({}))}
          title={"Reload"}
        />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    alignContent: "flex-end",
    flexDirection: "row",
    marginTop: 2,
    marginBottom: 1,
    marginLeft: 5,
  },
  modal: {
    justifyContent: "center",
    width: "70%",
    alignSelf: "center",
  },
})

export default HomepageHeader
