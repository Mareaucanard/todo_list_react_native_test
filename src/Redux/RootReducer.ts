import { combineReducers } from "redux"
import authReducer from "./Auth/AuthReducer"

const AppReducer = combineReducers({
    auth: authReducer
})

export const RootReducer = (state: any, action: any) => {
    return AppReducer(state, action)
}

export type AppState = ReturnType<typeof RootReducer>

export default RootReducer
