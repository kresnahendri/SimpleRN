import { USER_ADD, USER_CHANGE_INPUT, USER_SELECT } from "../constants/actionTypes"

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