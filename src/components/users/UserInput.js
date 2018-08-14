import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import STYLES from '../../constants/styles'

const UserInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your name"
        value={props.nameInput}
        onChangeText={(event) => props.onChangeTextInput(event)}
      />
      <Button
        color={STYLES.COLOR.PRIMARY}
        title="Add"
        onPress={
          // Will replace with redux action: USER_ADD
          () => props.onAddUser()
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

export default UserInput