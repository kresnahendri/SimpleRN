import {
  USER_ADD,
  USER_SELECT,
  MODAL_CLOSE,
  USER_DELETE,
  USER_CHANGE_INPUT
} from '../constants/actionTypes'

const initState = {
  users: [
    { name: 'Falah' },
    { name: 'Wahyu' },
    { name: 'Heri' },
    { name: 'Asrul' },
    { name: 'Irma' },
    { name: 'Ahmad' },
    { name: 'Chandra' },
    { name: 'Mahesa' },
    { name: 'Idrus' }
  ],
  selectedUser: null,
  userNameInput: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case USER_CHANGE_INPUT:
      return {
        ...state,
        userNameInput: action.payload
      }

    case USER_ADD:
      return {
        ...state,
        users: [
          action.payload,
          ...state.users
        ],
        userNameInput: ''
      }
      
    case USER_SELECT:
      return {
        ...state,
        selectedUser: action.payload
      }
    case USER_DELETE:
    case MODAL_CLOSE:
    default:
      return state
  }
}