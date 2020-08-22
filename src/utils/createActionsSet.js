/**
 * @flow
 */

type ApiActionSet = {
  REQUEST: string,
  SUCCESS: string,
  FAILED: string,
}

const createApiActionsSet = (prefix: string): ApiActionSet => {
  return {
    REQUEST: `${prefix}.REQUEST`,
    SUCCESS: `${prefix}.SUCCESS`,
    FAILED: `${prefix}.FAILED`,
  }
}

export default {
  api: createApiActionsSet,
}
