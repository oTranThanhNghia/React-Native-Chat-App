import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-native'

import { STATUS_UNAUTHORIZED } from '../../config/constants'

export const filters = {
  always: () => true,
  exceptCommon: (error) => !error.response || ![STATUS_UNAUTHORIZED].includes(error.response.status),
}

const useErrorNotifier = (errorSelector, filter = filters.always) => {
  const error = useSelector(errorSelector)
  useEffect(() => {
    if (error && filter(error)) {
      const message = error.response ? error.response.data : error.message
      Alert.alert('Error', message)
    }
  }, [error])
}

export default useErrorNotifier
