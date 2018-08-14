import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import STYLES from '../../constants/styles'

const UserInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your name"
      />
      <Button
        color={STYLES.COLOR.PRIMARY}
        title="Add"
        onPress={
          // Will replace with redux action: USER_ADD
          () => alert('Pressed')
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
    paddingHorizontal: 20
  }
})

export default UserInput