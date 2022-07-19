import { combineReducers } from "redux"
import authReducer from "./Auth/AuthReducer"
import profileReducer from "./Profile/ProfileReducer"
import todosReducer from "./Todos/TodosReducer"
import { AuthCreator } from "./Auth"
import AsyncStorage from '@react-native-async-storage/async-storage'


const AppReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    todos: todosReducer
})

export const RootReducer = (state: any, action: any) => {
    if (action.type === AuthCreator.logout.REQUEST) {
        state = undefined
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('refresh_token')
    }
    return AppReducer(state, action)
}

export type AppState = ReturnType<typeof RootReducer>

export default RootReducer
