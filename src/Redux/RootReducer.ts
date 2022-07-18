import { combineReducers } from "redux"
import authReducer from "./Auth/AuthReducer"
import profileReducer from "./Profile/ProfileReducer"

const AppReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

export const RootReducer = (state: any, action: any) => {
    return AppReducer(state, action)
}

export type AppState = ReturnType<typeof RootReducer>

export default RootReducer
