import React from "react"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import TodoForm from "../Components/TodoForm"
import Colors from "../Config/Colors"
import { ProfileCreator } from "../Redux/Profile"
import { AppState } from "../Redux/RootReducer"
import { TodosCreator } from "../Redux/Todos"
import ISOtoReadable from "../Utils/ISOToReadable"

const IdState = ({ profile, todos }: AppState) => ({
  id: profile.id,
  loading: todos.isLoading,
  error: todos.error,
})

function AddTodo(): JSX.Element {
  const state = useSelector(IdState)
  const [hasSubtimed, changeSubmit] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => dispatch(ProfileCreator.getProfile.request({})), [])
  function onSubmit(param: object) {
    changeSubmit(true)
    dispatch(
      TodosCreator.createTodo.request({ todo: { ...param, user_id: state.id } })
    )
  }
  if (hasSubtimed && state.loading) {
    return <Text>Loading ♡</Text>
  } else if (hasSubtimed && !state.loading && state.error === undefined) {
    return <Text>Your todo was created!</Text>
  } else {
    return (
      <View style={{ backgroundColor: Colors.background }}>
        <TodoForm
          onSubmit={onSubmit}
          defaultForm={{
            title: "",
            description: "",
            due_time: ISOtoReadable(new Date()),
            status: "not started",
          }}
        />
        {hasSubtimed === true && <Text>Something went wrong :(</Text>}
      </View>
    )
  }
}

export default AddTodo
