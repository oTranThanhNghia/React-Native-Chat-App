/* eslint-disable no-unused-vars */
/**
 * @flow
 */

export type ConditionalItem<T> = {
  condition: boolean | void,
  item: T,
}

export default function conditionalSelect<T>(...conditions: Array<ConditionalItem<T>>): Array<T> {
  return conditions.filter(({ condition, item }) => condition).map(({ item }) => item)
}
