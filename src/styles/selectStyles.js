/**
 * @flow
 */

import type { Style } from '../types/local'
import { conditionalSelect } from '../utils'

type ConditionalStyle = {
  condition: boolean | void,
  style: Style,
}

export default (...conditionalStyles: Array<ConditionalStyle>): Array<Style> => {
  const items = conditionalStyles.map(({ condition, style }) => ({ condition, item: style }))
  return conditionalSelect<Style>(...items)
}
