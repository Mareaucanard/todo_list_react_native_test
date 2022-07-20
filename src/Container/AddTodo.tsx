import React from 'react';
import { useEffect, useState } from 'react';
import { View, ViewStyle } from 'react-native';

import TodoForm from '../Components/TodoForm';
import Colors from '../Config/Colors';
import ISOtoReadable from '../Utils/ISOToReadable';
import Todo from "../Interface/Todo"
import { StyleProp } from "react-native"

interface Props {
  onSubmit: (arg0: Todo) => void
  viewStyle: StyleProp<ViewStyle>
}

function AddTodo({onSubmit, viewStyle}: Props): JSX.Element {
  return (
    <View style={viewStyle}>
      <TodoForm
        onSubmit={onSubmit}
        defaultForm={{
          title: "",
          description: "",
          due_time: ISOtoReadable(new Date()),
          status: "not started",
        }}
        title={"Create a todo!"}
      />
    </View>
  )
}

export default AddTodo
