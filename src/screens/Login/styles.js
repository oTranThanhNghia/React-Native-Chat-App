import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  group: {
    alignItems: 'center',
  },
  input: {
    borderColor: colors.black,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    width: 140,
  },
})
