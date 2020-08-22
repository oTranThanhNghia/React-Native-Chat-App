import chattingReducer from './chatting.reducer'
import chattingActions from './chatting.actions'
import chattingSelectors from './chatting.selectors'

const chatting = {
  actions: chattingActions,
  selectors: chattingSelectors,
  reducer: chattingReducer,
}

export default chatting
