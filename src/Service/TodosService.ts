import request from "./API"
import Todo from "../Interface/Todo"

interface getReponse {
  data: {
    todos: Todo[]
  }
}

interface createReponse {
  data: {
    todo: Todo
  }
}

interface updateReponse {
  data: {
    todo: Todo
  }
}

interface deleteResponse {
  data: {
    msg: string
  }
}

export async function getTodosRoute(): Promise<getReponse> {
    return await request.get("/user/todos")
}

export async function createTodoRoute(params: Todo): Promise<createReponse> {
    return await request.post("/todos", params)
}

export async function updateTodoRoute(id: number, params:Todo): Promise<updateReponse> {
    return await request.put("/todos/" + id, params)
}

export async function deleteTodoRoute(id: number): Promise<deleteResponse> {
    return await request.delete("/todos/" + id)
}
