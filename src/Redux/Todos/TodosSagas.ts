import { all, call, fork, put, takeLatest } from "redux-saga/effects"

import {
  createTodoRoute,
  deleteTodoRoute,
  getTodosRoute,
  updateTodoRoute,
} from "../../Service/TodosService"
import { createTodo, deleteTodo, getTodos, updateTodo } from "./TodosCreator"

function* getTodosCall() {
  try {
    const { data } = yield call(getTodosRoute)

    yield put(getTodos.success({ todos: data }))
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

    yield put(createTodo.success({ todo: data }))
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

    yield put(updateTodo.success({ todo: data }))
  } catch (error) {
    yield put(createTodo.failure({ error }))
  }
}

function* deleteTodoCall({
  payload: { id },
}: ReturnType<typeof deleteTodo.request>) {
  try {
    const { data } = yield call(deleteTodoRoute, id)
    console.log(data)
    const { msg } = data

    yield put(deleteTodo.success({ msg }))
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
