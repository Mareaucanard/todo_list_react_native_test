import React from "react"
import { useEffect } from "react"
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Button from "../Components/BasicButton"
import { ProfileCreator } from "../Redux/Profile"
import { AppState } from "../Redux/RootReducer"

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
    navigation.goBack()
  }

  if (user.id === undefined) {
    return <Text>Loading ♡</Text>
  } else {
    return (
      <View>
        <Button
          title={"Delete user"}
          onPress={deleteUser}
        />
        <Text>Name: {user.id}</Text>
      </View>
    )
  }
}

export default Profile
