import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useEffect } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"

import { AppState } from "../Redux/RootReducer"
import { TodosCreator } from "../Redux/Todos"
import DateToFancy from "../Utils/DateToFancy"
import Todo from "./Todo"

const TodosState = ({ todos }: AppState) => ({
  todos: todos.todos,
  loading: todos.isLoading,
  error: todos.error,
})


function TodoList(): JSX.Element {
  const  { navigate } = useNavigation()
  const state = useSelector(TodosState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(TodosCreator.getTodos.request({}))
  }, [])

  function TodoWrapper({ item }: any) {

    const clean_desc =
      item.description.length < 1000
        ? item.description
        : item.description.slice(0, 1000) +
          "[The description was cut off because it was too long]"
    return (
      <TouchableOpacity onPress={() => navigate("SoloTodo", item)}>
        <Todo todo={{...item, description: clean_desc}} />
      </TouchableOpacity>
    )
  }
  if (state.loading === true) {
    return <Text>Loading ♡</Text>
  } else if (state.error !== undefined || state.todos === undefined) {
    console.log(state);
    return <Text>Something went wrong D:</Text>
  } else if (state.todos?.length === 0) {
    return <Text>You have no todos :(</Text>
  } else {
    return (
      <FlatList
        style={Styles.container}
        data={state.todos}
        renderItem={TodoWrapper}
        keyExtractor={(item) => item.id}
      />
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
