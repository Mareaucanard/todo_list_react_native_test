import React from "react"
import { View } from "react-native"
import Button from "./BasicButton"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import { logout } from "../Redux/Auth/AuthCreator"

function HomepageHeader(): JSX.Element {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  return (
    <View style={{ alignContent: "flex-end", flexDirection: "row" }}>
      <Button onPress={() => navigate("Profile")} title={"Profile"} />
      <Button onPress={() => dispatch(logout.request({}))} title={"Logout"} />
    </View>
  )
}

export default HomepageHeader
