import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../Redux/Auth/AuthCreator";


interface setFunctionProps {
  setForm: (...args: any[]) => void;
  state: {
    email: string,
    password: string,
    firstname: string,
    name: string
  };
}



function RegisterForm(props: setFunctionProps): JSX.Element {
    const {state, setForm} = props;
    const dispatch = useDispatch();

    const Handleregister = () => {
      dispatch(register.request(state));
    };
    const Handlelogin = () => {
      dispatch(login.request(state));
    };

    function handleChange(field: string, value: string) {
        setForm({...state, [field]: value})
    }

  return (<View style={Styles.container}>
        <Text>Email:</Text><TextInput style={Styles.textBox} onChangeText={newText => handleChange("email", newText)}/>
        <Text>Password:</Text><TextInput style={Styles.textBox} onChangeText={newText => handleChange("password", newText)}/>
        <Text>Firstname:</Text><TextInput style={Styles.textBox} onChangeText={newText => handleChange("firstname", newText)}/>
        <Text>Name</Text><TextInput style={Styles.textBox} onChangeText={newText => handleChange("name", newText)}/>
        <Button style={Styles.button} onPress={Handlelogin} title={"login"}/>
        <Button style={Styles.button} onPress={Handleregister} title={"register"}/>
  </View>)
}

const Styles = StyleSheet.create({
  container: {
    width: "70%",
  },
  textBox: {
    backgroundColor: "red",
  },
  button: {
    borderWidth: 20,
    borderColor: "red",
  }
});

export default RegisterForm
