import React from 'react'
import { Text, View, Modal, Button, StyleSheet } from 'react-native'

const UserDetail = (props) => {
  if (props.selectedUser === null) return null

  return (
    <Modal
      visible={props.selectedUser !== null}
      animationType="slide"
    >
      <View style={styles.container}>
        <Text style={styles.userName}>{props.selectedUser.name}</Text>
        <Button
          title="Cancel"
          color="red"
          onPress={props.onCancel}
        />
        <Button
          title="Delete"
          onPress={() => props.onDelete(props.selectedUser)}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default UserDetail
