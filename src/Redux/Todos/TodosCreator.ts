import { ActionType } from "typesafe-actions"
import Todo from "../../Interface/Todo"
import Tools from "../../Tools/Tools"

export interface GetTodosAction {
  id: number
}

export interface GetTodosSucess {
  todos: Todo[]
}

export interface GetTodoFailure {
  error: Error | string
}

export interface CreateTodoAction {
  todo: Todo
}

export interface CreateTodoSucess {
  todo: Todo
}

export interface CreateTodoFailure {
  error: Error | string
}

export interface DeleteTodoAction {
  id: number
}

export interface DeleteTodoSucess {
  msg: string
}

export interface DeleteTodoFailure {
  error: Error | string
}

export interface UpdateTodoAction {
  todo: Todo
}

export interface UpdateTodoSucess {
  todo: Todo
}

export interface UpdateTodoFailre {
  error: Error | string
}

export const getTodos = Tools.createAsyncAction<
  GetTodosAction,
  GetTodosSucess,
  GetTodoFailure
>("Todos/GET")

export const createTodo = Tools.createAsyncAction<
  CreateTodoAction,
  CreateTodoSucess,
  CreateTodoFailure
>("Todos/CREATE")

export const updateTodo = Tools.createAsyncAction<
  UpdateTodoAction,
  UpdateTodoSucess,
  UpdateTodoFailre
>("Todos/UPDATE")

export const deleteTodo = Tools.createAsyncAction<
  DeleteTodoAction,
  DeleteTodoSucess,
  DeleteTodoFailure
>("Todos/DELETE")

export type Actions =
  | ActionType<typeof getTodos>
  | ActionType<typeof updateTodo>
  | ActionType<typeof deleteTodo>
  | ActionType<typeof createTodo>
