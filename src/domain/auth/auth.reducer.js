/**
 * @flow
 */

type State = {
  isAuthenticated: boolean,
}

export const initialState: State = {
  isAuthenticated: false,
}

export default function authReducer(state: State = initialState, action: any) {
  switch (action.type) {
    default: {
      return state
    }
  }
}
