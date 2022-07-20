import { useEffect } from "react"
import { View } from "react-native"
import { useDispatch } from "react-redux"

import HomepageHeader from "../Components/HomepageHeader"
import TodoList from "../Components/TodoList"
import Colors from "../Config/Colors"
import { ProfileCreator } from "../Redux/Profile"

function LoggedInHomePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProfileCreator.getProfile.request({}))
  }, [])
  return (
    <View style={{ backgroundColor: Colors.background }}>
      <HomepageHeader />
      <TodoList />
    </View>
  )
}

export default LoggedInHomePage
