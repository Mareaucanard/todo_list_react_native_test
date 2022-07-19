import Tools from "../../Tools/Tools"
import { ActionType } from "typesafe-actions"

export interface GetProfileAction {
}

export interface GetProfileSuccess {
  id: number
  email: string
  firstname: string
  name: string
}

export interface GetProfileFailure {
  error: Error | string
}

export interface UpdateProfileAction {
  id: number
  email: string
  password: string
  firstname: string
  name: string
}

export interface UpdateProfileSuccess {
  id: number
  email: string
  firstname: string
  name: string
}

export interface UpdateProfileFailure {
  error: Error | string
}

export interface DeleteProfileAction {
  id: number
}

export interface DeleteProfileSuccess {
  msg: string
}

export interface DeleteProfileFailure {
  error: Error | string
}

export const getProfile = Tools.createAsyncAction<
  GetProfileAction,
  GetProfileSuccess,
  GetProfileFailure
>("Profile/GET")

export const updateProfile = Tools.createAsyncAction<
  UpdateProfileAction,
  UpdateProfileSuccess,
  UpdateProfileFailure
>("Profile/UPDATE")

export const deleteProfile = Tools.createAsyncAction<
  DeleteProfileAction,
  DeleteProfileSuccess,
  DeleteProfileFailure
>("Profile/DELETE")

export type Actions =
  | ActionType<typeof getProfile>
  | ActionType<typeof updateProfile>
  | ActionType<typeof deleteProfile>
