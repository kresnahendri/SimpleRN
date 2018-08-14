import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import STYLES from '../../constants/styles'
import { userAddAction, userChangeInputAction } from '../../actions/userAction'

const UserInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your name"
        value={props.nameInput}
        // USER_CHANGE_INPUT
        onChangeText={(event) => props.userChangeInputAction(event)}
      />
      <Button
        color={STYLES.COLOR.PRIMARY}
        title="Add"
        onPress={
          // USER_ADD
          () => props.userAddAction(props.user.userNameInput)
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  textInput: {
    flex: 1
  }
})

export default connect(
  (state) => ({
    user: state.user
  }),
  { userAddAction, userChangeInputAction }
)(UserInput)