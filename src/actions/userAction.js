import { USER_ADD, USER_CHANGE_INPUT, USER_SELECT, USER_DELETE, MODAL_CLOSE } from "../constants/actionTypes"

export const userChangeInputAction = (userNameInput) => {
  return {
    type: USER_CHANGE_INPUT,
    payload: userNameInput
  }
}
export const userAddAction = (userName) => {
  return {
    type: USER_ADD,
    payload: {
      name: userName
    }
  }
}

export const userSelectAction = (user) => {
  return {
    type: USER_SELECT,
    payload: user
  }
}

export const userDeleteAction = (user) => {
  return {
    type: USER_DELETE,
    payload: user
  }
}

export const closeModalAction = () => {
  return {
    type: MODAL_CLOSE
  }
}