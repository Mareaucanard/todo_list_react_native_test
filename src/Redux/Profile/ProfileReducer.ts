import { Actions } from './ProfileCreator';
import * as ProfileCreator from './ProfileCreator';

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
    case ProfileCreator.updateProfile.REQUEST:
    case ProfileCreator.deleteProfile.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case ProfileCreator.getProfile.SUCCESS:
    case ProfileCreator.updateProfile.SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        firstname: action.payload.firstname,
      }
    case ProfileCreator.getProfile.FAILURE:
    case ProfileCreator.deleteProfile.FAILURE:
    case ProfileCreator.updateProfile.FAILURE:
      return {
        isLoading: false,
        error: action.payload.error,
      }
    case ProfileCreator.deleteProfile.SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
