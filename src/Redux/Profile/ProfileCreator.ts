import Tools from "../../Tools/Tools"
import { ActionType } from "typesafe-actions"

export interface GetProfileAction {
}

export interface GetProfileSucess {
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

export interface UpdateProfileSucess {
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

export interface DeleteProfileSucess {
  msg: string
}

export interface DeleteProfileFailure {
  error: Error | string
}

export const getProfile = Tools.createAsyncAction<
  GetProfileAction,
  GetProfileSucess,
  GetProfileFailure
>("Profile/GET")

export const updateProfile = Tools.createAsyncAction<
  UpdateProfileAction,
  UpdateProfileSucess,
  UpdateProfileFailure
>("Profile/UPDATE")

export const deleteProfile = Tools.createAsyncAction<
  DeleteProfileAction,
  DeleteProfileSucess,
  DeleteProfileFailure
>("Profile/DELETE")

export type Actions =
  | ActionType<typeof getProfile>
  | ActionType<typeof updateProfile>
  | ActionType<typeof deleteProfile>
