import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../Redux/Auth/AuthCreator';
import { getTodos } from '../Redux/Todos/TodosCreator';
import Button from './BasicButton';

function HomepageHeader(): JSX.Element {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  return (
    <View>
      <View style={Styles.container}>
        <Button onPress={() => navigate("AddTodo")} title={"Add a todo"}></Button>
        <Button onPress={() => navigate("Profile")} title={"Profile"} />
        <Button onPress={() => dispatch(logout.request({}))} title={"Logout"} />
        <Button onPress={() => dispatch(getTodos.request({}))} title={"Reload"}/>
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
    marginLeft: 5
  },
})

export default HomepageHeader
