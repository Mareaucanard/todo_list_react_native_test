import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Components/BasicButton';
import TodoElem from '../Components/Todo';
import TodoForm from '../Components/TodoForm';
import Colors from '../Config/Colors';
import { ProfileCreator } from '../Redux/Profile';
import { AppState } from '../Redux/RootReducer';
import { TodosCreator } from '../Redux/Todos';

const IdState = ({ profile, todos }: AppState) => ({
  id: profile.id,
  loading: todos.isLoading,
  error: todos.error,
})

function SoloTodo({ route, navigation }): JSX.Element {
  const todo = route.params
  const [editing, setEditing] = useState(false)
  const state = useSelector(IdState)
  const [hasSubtimed, changeSubmit] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => dispatch(ProfileCreator.getProfile.request({})), [])
  function onSubmit(param: object) {
    changeSubmit(true)
    setEditing(false)
    dispatch(
      TodosCreator.updateTodo.request({ todo: { ...param, user_id: state.id } })
    )
    navigation.goBack()
  }

  function onDelete() {
    dispatch(TodosCreator.deleteTodo.request({ id: todo.id }))
    navigation.goBack()
  }
  if (editing === false) {
    return (
      <View style={Styles.container}>
        <View style={Styles.buttonsContainer}>
          <Button title={"Edit"} onPress={() => setEditing(true)} />
          <Button
            title={"Delete"}
            onPress={onDelete}
            buttonStyle={Styles.deleteButton}
          />
        </View>
        <TodoElem todo={todo} />
        {!state.loading && hasSubtimed && !state.error && (
          <Text>Sucessfully edited!</Text>
        )}
      </View>
    )
  } else {
    return <TodoForm defaultForm={todo} onSubmit={onSubmit} />
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "red",
  },
})

export default SoloTodo
