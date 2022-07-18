import React from "react"
import { View } from "react-native"
import Button from "./BasicButton"
import { useNavigation } from "@react-navigation/native"

function HomepageHeader(): JSX.Element {
  const { navigate } = useNavigation()
  return (
    <View style={{alignItems: "flex-end"}}>
      <Button onPress={() => navigate("Profile")} title={"Profile"} />
    </View>
  )
}

export default HomepageHeader
