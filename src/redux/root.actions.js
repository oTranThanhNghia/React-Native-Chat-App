const types = {
  RESET_STATE: 'root.RESET_STATE',
}

const resetState = () => ({ type: types.RESET_STATE })

const rootActions = {
  resetState,
  types,
}

export default rootActions
