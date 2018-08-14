import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import STYLES from '../../constants/styles'

const UserInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your name"
        value={props.nameInput}
        onChangeText={props.onChangeTextInput}
      />
      <Button
        color={STYLES.COLOR.PRIMARY}
        title="Add"
        onPress={
          // Will replace with redux action: USER_ADD
          (event) => alert(props.nameInput)
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
    justifyContent: 'space-between'
  }
})

export default UserInput