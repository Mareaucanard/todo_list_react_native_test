import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"

import { AppState } from "../Redux/RootReducer"
import { TodosCreator } from "../Redux/Todos"
import TodoElem from "./Todo"
import SoloTodo from "../Container/SoloTodo"
import Todo from "../Interface/Todo"

const TodosState = ({ todos }: AppState) => ({
  todos: todos.todos,
  loading: todos.isLoading,
  error: todos.error,
})

function TodoList(): JSX.Element {
  const { navigate } = useNavigation()
  const [modalTodo, setModalTodo] = useState<null | Todo>(null)
  const state = useSelector(TodosState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(TodosCreator.getTodos.request({}))
  }, [])

  function TodoWrapper({ item }: any) {
    return (
      <TouchableOpacity onPress={() => setModalTodo(item)}>
        <TodoElem todo={item} />
      </TouchableOpacity>
    )
  }
  if (state.loading === true) {
    return <Text>Loading ♡</Text>
  } else if (state.todos === undefined) {
    return <Text>Something went wrong D:</Text>
  } else if (state.todos?.length === 0) {
    return <Text>You have no todos :(</Text>
  } else {
    return (
      <View>
        {state.error && <Text style={{color: "red"}}>{state.error.message}</Text>}
        <Modal
          visible={modalTodo !== null}
          transparent={true}
          animationType="fade"
        >
          <SoloTodo todo={modalTodo} onAction={() => setModalTodo(null)}></SoloTodo>
        </Modal>
        <TouchableWithoutFeedback
          style={{ zIndex: modalTodo === null ? -1 : 1 }}
          onPress={() => setModalTodo(null)}
        >
          <FlatList
            style={Styles.container}
            data={state.todos}
            renderItem={TodoWrapper}
            keyExtractor={(item) => item.id}
          />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
  },
})

export default TodoList
