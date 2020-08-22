/**
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'

import { selectStyles } from '../../styles'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
})

type Props = {
  vertical?: number,
  horizontal?: number,
}

export default function Spacing({ vertical, horizontal }: Props) {
  const spaces = selectStyles(
    {
      // $FlowExpectedError
      condition: horizontal > 0,
      style: { paddingLeft: horizontal },
    },
    {
      // $FlowExpectedError
      condition: vertical > 0,
      style: { paddingTop: vertical },
    }
  )

  return <View style={[styles.container, ...spaces]} />
}

Spacing.defaultProps = {
  vertical: 0,
  horizontal: 0,
}
