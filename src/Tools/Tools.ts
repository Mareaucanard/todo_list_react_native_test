import { createAsyncAction } from "typesafe-actions"

type ErrorAction = { error: Error | string }

const Tools = {
  createAsyncAction: <
    TRequest = unknown,
    TSuccess = unknown,
    TFailure = ErrorAction
  >(
    actionName: string
  ) => {
    return {
      ...createAsyncAction(
        `${actionName}_REQUEST`,
        `${actionName}_SUCCESS`,
        `${actionName}_FAILURE`
      )<TRequest, TSuccess, TFailure>(),
      REQUEST: `${actionName}_REQUEST`,
      SUCCESS: `${actionName}_SUCCESS`,
      FAILURE: `${actionName}_FAILURE`,
    }
  },
}

export default Tools
