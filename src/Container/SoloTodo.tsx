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
import Todo from '../Interface/Todo';

const IdState = ({ profile, todos }: AppState) => ({
  id: profile.id,
  loading: todos.isLoading,
  error: todos.error,
})

interface Props {
  todo: Todo | null
  onAction: () => void
}

function SoloTodo({ todo, onAction }: Props): JSX.Element {
  const [editing, setEditing] = useState(false)
  const state = useSelector(IdState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProfileCreator.getProfile.request({}))
  }, [])
  function onSubmit(param: Todo) {
    setEditing(false)
    dispatch(
      TodosCreator.updateTodo.request({ todo: { ...param, user_id: state.id } })
    )
    onAction()
  }

  function onDelete() {
    dispatch(TodosCreator.deleteTodo.request({ id: todo.id }))
    onAction()
  }
  if (todo === null) {
    return <Text>?</Text>
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
      </View>
    )
  } else {
    return <TodoForm defaultForm={todo} onSubmit={onSubmit} title={"Edit"}/>
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
