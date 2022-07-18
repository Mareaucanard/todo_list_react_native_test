import request from "./API"

interface getReponse {
  data: {
    id?: number
    email?: string
    name?: string
    firstname?: string
  }
}

interface updateReponse {
  data: {
    id?: number
    email?: string
    name?: string
    firstname?: string
  }
}

interface deleteResponse {
  data: {
    msg?: string
  }
}

export async function getProfileRoute() {
  return await request.get("/user")
}

export async function updateProfileRoute(id: number, params: any) {
  return await request.put("/users/" + id, params)
}

export async function deleteProfileRoute(id: number) {
  return await request.delete("/users/" + id)
}
