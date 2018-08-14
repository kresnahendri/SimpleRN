import { USER_ADD, USER_CHANGE_INPUT, USER_SELECT, USER_DELETE, MODAL_CLOSE, USER_GET_ALL } from "../constants/actionTypes"
const BASE_URL = 'https://simplern-1a70c.firebaseio.com/users.json'

export const userGetAllAction = () => {
  return (dispatch) => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((resParsed) => {
        const users = []
        for (const key in resParsed) {
          users.push(resParsed[key])
        }
        dispatch({
          type: USER_GET_ALL,
          payload: users
        })
      })
      .catch((error) => alert('Gagal Bro!'))
  }
}

export const userChangeInputAction = (userNameInput) => {
  return {
    type: USER_CHANGE_INPUT,
    payload: userNameInput
  }
}
export const userAddAction = (userName) => {
  return (dispatch) => {
    fetch(BASE_URL, {
      method: 'post',
      body: JSON.stringify({
        name: userName
      })
    })
      .then((res) => res.json())
      .then((resParsed) => {
        console.log(resParsed)
        dispatch({
          type: USER_ADD,
          payload: {
            name: userName
          }
        })
      })
      .catch((error) => alert('Gagal Bro!'))
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