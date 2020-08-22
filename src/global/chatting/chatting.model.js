/**
 * @flow
 */

import type { Conversation } from '../../types/local'

const getName = (conversation: Conversation, options: any = {}): string => {
  const currentUser = options.currentUser || {}

  console.log(`getName conversation= `, conversation)

  return conversation.members
    .filter((member) => member.id !== currentUser.id)
    .map((member) => member.name)
    .join(', ')
}

const chattingModel = {
  getName,
}

export default chattingModel
