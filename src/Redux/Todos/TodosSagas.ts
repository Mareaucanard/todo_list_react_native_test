import { put, call, takeLatest, all, fork } from "redux-saga/effects"
import { getTodos, createTodo, updateTodo, deleteTodo } from "./TodosCreator"
import {
  createTodoRoute,
  getTodosRoute,
  updateTodoRoute,
  deleteTodoRoute,
} from "../../Service/TodosService"

function* getTodosCall() {
  try {
    const { data } = yield call(getTodosRoute)

    yield put(getTodos.success({todos: data}))
  } catch (error) {
    yield put(getTodos.failure({ error }))
  }
}

function* createTodoCall({
  payload: { todo },
}: ReturnType<typeof createTodo.request>) {
  const params = todo
  try {
    const { data } = yield call(createTodoRoute, params)

    yield put(createTodo.success({todo: data}))
  } catch (error) {
    yield put(createTodo.failure({ error }))
  }
}

function* updateTodoCall({
  payload: { todo },
}: ReturnType<typeof updateTodo.request>) {
  const params = todo
  try {
    const { data } = yield call(updateTodoRoute, params.id, params)
    const { todo } = data

    yield put(updateTodo.success(todo))
  } catch (error) {
    yield put(createTodo.failure({ error }))
  }
}

function* deleteTodoCall({
  payload: { id },
}: ReturnType<typeof deleteTodo.request>) {
  try {
    const { data } = yield call(deleteTodoRoute, id)
    const { msg } = data

    yield put(deleteTodo.success(msg))
  } catch (error) {
    yield put(deleteTodo.failure({ error }))
  }
}

function* watchOnAuth() {
  yield takeLatest(getTodos.REQUEST, getTodosCall)
  yield takeLatest(createTodo.REQUEST, createTodoCall)
  yield takeLatest(updateTodo.REQUEST, updateTodoCall)
  yield takeLatest(deleteTodo.REQUEST, deleteTodoCall)
}

export default function* authSagas() {
  yield all([fork(watchOnAuth)])
}
