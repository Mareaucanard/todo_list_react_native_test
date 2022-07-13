import { AuthCreator } from ".";
import { Actions } from "./AuthCreator";

export interface AuthState {
  isLoading: boolean;
  token?: string | null;
  msg?: string;
  error?: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  token: null,
  msg: "",
  error: false,
};

export default function authReducer(
  state: AuthState = initialState,
  action: Actions
): AuthState {
  switch (action.type) {
    case AuthCreator.login.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case AuthCreator.login.SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
      };
    case AuthCreator.login.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        msg: action.payload.msg,
      };
    case AuthCreator.register.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case AuthCreator.register.SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
      };
    case AuthCreator.register.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        msg: action.payload.msg,
      };
    default:
      return state;
  }
}
