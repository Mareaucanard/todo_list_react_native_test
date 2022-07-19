import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCreator } from "../Redux/Profile";
import { AppState } from "../Redux/RootReducer";
import Button from "./BasicButton";
import Field from "./BasicField";

const updateStatus = ({profile}: AppState) => ({
    loading: profile.isLoading
})

interface Props {
    userData: {
        email: string
        firstname: string
        name: string
        id: number
    }
}

function UpdateProfile({userData}: Props): JSX.Element {
    const state = useSelector(updateStatus)
    const [hasSubmited, setSubmited] = useState(false)
    const [form, setForm] = useState({
        ...userData,
        password: ""
    })
    const dispatch = useDispatch()

    function HandleSubmit() {
        dispatch(ProfileCreator.updateProfile.request(form))
        setSubmited(true)
    }
    function handleChange(value: string, field: string) {
        setForm({ ...form, [field]: value })
    }
    return <View>
        <Field name={"email"} value={form["email"]} onChange={handleChange}/>
        <Field name={"password"} value={form["password"]} onChange={handleChange} secureTextEntry={true}/>
        <Field name={"firstname"} value={form["firstname"]} onChange={handleChange}/>
        <Field name={"name"} value={form["name"]} onChange={handleChange}/>
        { hasSubmited && <Text>{state.loading ? "Loading ♡" : "Profile has been updated!"}</Text>}
        <Button title={"Update profile"} onPress={HandleSubmit}/>
    </View>
}
export default UpdateProfile
