import HomepageHeader from "../Components/HomepageHeader"
import { useDispatch } from "react-redux"
import { View } from "react-native"
import Colors from "../Config/Colors"

function LoggedInHomePage() {
  // Fetch todos here!
  return (
    <View style={{backgroundColor: Colors.background}}>
      <HomepageHeader />
    </View>
  )
}

export default LoggedInHomePage
