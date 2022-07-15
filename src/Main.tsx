import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { AppState } from "./Redux/RootReducer";
import { useState } from "react";
import RegisterForm from "./Container/LoginForm";

const mainState = ({ auth }: AppState) => ({
  token: auth.token,
  error: auth.error,
  msg: auth.msg,
  isLoading: auth.isLoading,
});

function Handlelogin(dispatch: any): void {
  dispatch();
}

export default function Main(): JSX.Element {
  const [form, setform] = useState({
    email: "",
    password: "",
    firstname: "",
    name: "",
  });
  const state = useSelector(mainState);

  const handleChange = React.useCallback((form: any) => {
    setform(form);
  }, []);

  console.log(form);
  if (state.isLoading === true) {
    return <Text>Loading</Text>;
  }
  if (state.token != null && state.token != undefined) {
    return <Text>Your token is:{state.token}</Text>;
  }
  return (
    <View>
      <RegisterForm state={form} setForm={setform}/>
      <Text>Not logged in</Text>
    </View>
  );
}
