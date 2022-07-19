import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Button from '../Components/BasicButton';
import Colors from '../Config/Colors';
import { AppState } from '../Redux/RootReducer';
import IsConnected from '../Utils/IsConnected';
import LoggedInHomePage from './LoggedInHomepage';

const tokenState = ({ auth }: AppState) => ({
  token: auth.token,
})

function HomePage(): JSX.Element {
  const { navigate } = useNavigation()
  const state = useSelector(tokenState)
  const isConnected = IsConnected(state.token)

  if (isConnected) {
    return <LoggedInHomePage />
  } else {
    return (
      <View style={Styles.notLoggedIn}>
        <Text style={Styles.text}>You are not connected</Text>
        <Button
          textStyle={Styles.text}
          onPress={() => navigate("Login")}
          title={"Login"}
        />
        <Button
          textStyle={Styles.text}
          onPress={() => navigate("Register")}
          title={"Register"}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  notLoggedIn: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.background,
  },
  text: {
    flex: 1,
  },
})

export default HomePage
