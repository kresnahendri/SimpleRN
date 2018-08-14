import { USER_ADD } from "../constants/actionTypes"

export const userAddAction = (userName) => {
  return {
    type: USER_ADD,
    payload: {
      name: userName
    }
  }
}