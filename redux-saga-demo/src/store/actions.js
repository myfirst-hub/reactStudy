import * as actionTypes from './action-types'

const actions = {
  add() { // action creator
    return {
      type: actionTypes.ADD
    }
  },
  
  async_add() { // action creator
    return {
      type: actionTypes.ASYNC_ADD
    }
  }
}

export default actions