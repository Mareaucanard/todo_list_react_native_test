import { Actions } from "./ProfileCreator"
import { ProfileCreator } from "."

export interface ProfileState {
  isLoading: boolean
  id?: number
  email?: string
  name?: string
  firstname?: string
  error?: Error | string
}

const initalState: ProfileState = {
  isLoading: false,
}

export default function profileReducer(
  state: ProfileState = initalState,
  action: Actions
): ProfileState {
  switch (action.type) {
    case ProfileCreator.getProfile.REQUEST:
        return {
            ...state,
            isLoading: true,
            error: undefined
        }
    case ProfileCreator.getProfile.SUCCESS:
        return {
            ...state,
            isLoading: false,
            id: action.payload.id,
            email: action.payload.email,
            name:action.payload.name,
            firstname: action.payload.firstname
        }
    case ProfileCreator.getProfile.FAILURE:
        return {
            isLoading: false,
            error: action.payload.error
        }
    default:
      return state
  }
}
