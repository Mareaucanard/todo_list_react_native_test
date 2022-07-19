import { ActionType } from "typesafe-actions"
import Todo from "../../Interface/Todo"
import Tools from "../../Tools/Tools"

export interface GetTodosAction {
}

export interface GetTodosSuccess {
  todos: Todo[]
}

export interface GetTodoFailure {
  error: Error | string
}

export interface CreateTodoAction {
  todo: Todo
}

export interface CreateTodoSuccess {
  todo: Todo
}

export interface CreateTodoFailure {
  error: Error | string
}

export interface DeleteTodoAction {
  id: number
}

export interface DeleteTodoSuccess {
  msg: string
}

export interface DeleteTodoFailure {
  error: Error | string
}

export interface UpdateTodoAction {
  todo: Todo
}

export interface UpdateTodoSuccess {
  todo: Todo
}

export interface UpdateTodoFailre {
  error: Error | string
}

export const getTodos = Tools.createAsyncAction<
  GetTodosAction,
  GetTodosSuccess,
  GetTodoFailure
>("Todos/GET")

export const createTodo = Tools.createAsyncAction<
  CreateTodoAction,
  CreateTodoSuccess,
  CreateTodoFailure
>("Todos/CREATE")

export const updateTodo = Tools.createAsyncAction<
  UpdateTodoAction,
  UpdateTodoSuccess,
  UpdateTodoFailre
>("Todos/UPDATE")

export const deleteTodo = Tools.createAsyncAction<
  DeleteTodoAction,
  DeleteTodoSuccess,
  DeleteTodoFailure
>("Todos/DELETE")

export type Actions =
  | ActionType<typeof getTodos>
  | ActionType<typeof updateTodo>
  | ActionType<typeof deleteTodo>
  | ActionType<typeof createTodo>
