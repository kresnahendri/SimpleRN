import React from 'react'
import { Text, View, Modal, Button, StyleSheet } from 'react-native'

const UserDetail = (props) => {
  return (
    <Modal
      visible={props.selectedUser !== null}
      animationType="slide"
    >
      <View style={styles.container}>
        <Text>UserDetail</Text>
        <Button
          title="Cancel"
          color="red"
          onPress={props.onCancel}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})

export default UserDetail
