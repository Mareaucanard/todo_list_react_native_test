import { Actions } from "./TodosCreator"
import * as TodosCreator from "./TodosCreator"
import Todo from "../../Interface/Todo"

export interface TodosState {
  todos?: Todo[]
  error?: Error | string
  msg?: string
  isLoading: boolean
}

const initalState: TodosState = {
  isLoading: false,
}

export default function profileReducer(
  state: TodosState = initalState,
  action: Actions
): TodosState {
  switch (action.type) {
    case TodosCreator.getTodos.REQUEST:
    case TodosCreator.createTodo.REQUEST:
    case TodosCreator.updateTodo.REQUEST:
    case TodosCreator.deleteTodo.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case TodosCreator.getTodos.FAILURE:
    case TodosCreator.createTodo.FAILURE:
    case TodosCreator.updateTodo.FAILURE:
    case TodosCreator.deleteTodo.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    case TodosCreator.getTodos.SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.todos,
      }
    case TodosCreator.createTodo.SUCCESS:
      state.todos?.push(action.payload.todo)
      return {
        ...state,
        isLoading: false,
        todo: state.todos,
      }
    case TodosCreator.updateTodo.SUCCESS:
      const modified_index = state.todos?.indexOf(
        (item) => action.payload.todo.id === item.id
      )
      state.todos[modified_index] = action.payload.todo.id
      return {
        ...state,
        isLoading: false,
        todos: state.todos,
      }
    case TodosCreator.deleteTodo.SUCCESS:
      const split_message = action.payload.msg?.split(" ")
      const db_index = parseInt(split_message[split_message?.length - 1])
      return {
        ...state,
        isLoading: false,
        todos: state.todos?.filter((value: Todo) => value.id !== db_index),
      }
    default:
      return state
  }
}
