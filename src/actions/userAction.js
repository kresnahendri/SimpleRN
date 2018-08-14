import { USER_ADD, USER_CHANGE_INPUT, USER_SELECT, USER_DELETE, MODAL_CLOSE } from "../constants/actionTypes"

export const userChangeInputAction = (userNameInput) => {
  return {
    type: USER_CHANGE_INPUT,
    payload: userNameInput
  }
}
export const userAddAction = (userName) => {
  return (dispatch) => {
    fetch('https://simplern-1a70c.firebaseio.com/users.json', {
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