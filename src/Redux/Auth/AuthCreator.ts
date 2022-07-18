import Tools from "../../Tools/Tools"
import { ActionType } from "typesafe-actions"

export interface LoginAction {
  email: string
  password: string
}

export interface LoginSuccessAction {
  token: string
}

export interface LoginFailureAction {
  code: number
  msg: string
}

export interface RegisterAction {
  firstname: string
  name: string
  email: string
  password: string
}

export interface RegisterSuccessAction {
  token: string
}

export interface RegisterFailureAction {
  code: number
  msg: string
}

export const login = Tools.createAsyncAction<
  LoginAction,
  LoginSuccessAction,
  LoginFailureAction
>("AuthTypes/LOGIN")

export const register = Tools.createAsyncAction<
  RegisterAction,
  RegisterSuccessAction,
  RegisterFailureAction
>("AuthTypes/REGISTER")

export type Actions = ActionType<typeof login> | ActionType<typeof register>
