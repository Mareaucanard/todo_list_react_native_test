import HomepageHeader from "../Components/HomepageHeader"
import { useDispatch } from "react-redux"
import { View } from "react-native"

function LoggedInHomePage() {
  const dispatch = useDispatch()

  // Fetch todos here!
  return (
    <View>
      <HomepageHeader />
    </View>
  )
}

export default LoggedInHomePage
