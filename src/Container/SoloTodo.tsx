import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import TodoElem from "../Components/Todo";
import Colors from "../Config/Colors";
import Todo from "../Interface/Todo";

function SoloTodo({ route, navigation}): JSX.Element {
    const todo = route.params
    return <View style={Styles.container}>
        <TodoElem todo={todo}/>
    </View>
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5
    }
})

export default SoloTodo
