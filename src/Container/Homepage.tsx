import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import IsConnected from "../Utils/IsConnected"
import { AppState } from "../Redux/RootReducer"
import { useNavigation } from "@react-navigation/native"
import Button from "../Components/BasicButton"
import Colors from "../Config/Colors"
import React from "react"
import LoggedInHomePage from "./LoggedInHomepage"

const tokenState = ({ auth }: AppState) => ({
  token: auth.token,
})

function HomePage(): JSX.Element {
  const { navigate } = useNavigation()
  const state = useSelector(tokenState)
  const isConnected = IsConnected(state.token)

  if (isConnected) {
    return <LoggedInHomePage />
    // Need to add buttons to navigate to app features
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
