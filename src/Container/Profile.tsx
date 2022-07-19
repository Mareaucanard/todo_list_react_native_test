import React from "react"
import { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Components/BasicButton"
import { AuthCreator } from "../Redux/Auth"
import { ProfileCreator } from "../Redux/Profile"
import { AppState } from "../Redux/RootReducer"
import UpdateProfile from "../Components/UpdateProfile"
import Colors from "../Config/Colors"

function fetchUserData(dispatch: any) {
  dispatch(ProfileCreator.getProfile.request({}))
}

const userState = ({ profile }: AppState) => ({
  id: profile.id,
  name: profile.name,
  email: profile.email,
  firstname: profile.firstname,
})

function Profile({ navigation }) {
  const dispatch = useDispatch()
  const user = useSelector(userState)
  useEffect(() => fetchUserData(dispatch), [])

  function deleteUser() {
    dispatch(ProfileCreator.deleteProfile.request({id: user.id}))
    dispatch(AuthCreator.logout.request({}))
    navigation.goBack()
  }

  if (user.id === undefined) {
    return <Text>Loading ♡</Text>
  } else {
    return (
      <View style={Styles.container}>
        <Button buttonStyle={Styles.button}
          title={"Delete user"}
          onPress={deleteUser}
        />
        <UpdateProfile userData={user}/>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
      backgroundColor: Colors.background
  },
  button: {
    marginBottom: 3,
    marginTop: 3
  }
})


export default Profile
