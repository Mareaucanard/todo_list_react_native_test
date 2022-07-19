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

export async function getProfileRoute(): Promise<getReponse> {
  return await request.get("/user")
}

export async function updateProfileRoute(
  id: number,
  params: any
): Promise<updateReponse> {
  return await request.put("/users/" + id, params)
}

export async function deleteProfileRoute(id: number): Promise<deleteResponse> {
  return await request.delete("/users/" + id)
}
