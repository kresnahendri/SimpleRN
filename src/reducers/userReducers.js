import {
  USER_ADD,
  USER_SELECT,
  MODAL_CLOSE,
  USER_DELETE
} from '../constants/actionTypes'

const initState = {
  users: [],
  selectedUser: null,
  userNameInput: ''
}

export default (state = iniState, action) => {
  switch (action.type) {
    case USER_ADD:
      return {
        ...state,
        users: [
          action.paylod,
          ...this.state.users
        ],
        userNameInput: ''
      }
    case USER_SELECT:
    case USER_DELETE:
    case MODAL_CLOSE:
    default:
      break;
  }
}