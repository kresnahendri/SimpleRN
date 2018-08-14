import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Modal, Button, Image, StyleSheet } from 'react-native'
import { userDeleteAction, closeModalAction } from '../../actions/userAction'

const UserDetail = (props) => {
  const { selectedUser } = props.user
  if (selectedUser === null) return null

  return (
    <Modal
      visible={selectedUser !== null}
      animationType="slide"
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/user.png')}
        />
        <Text style={styles.userName}>{selectedUser.name}</Text>
        <Button
          title="Cancel"
          color="red"
          onPress={() => props.closeModalAction()}
        />
        <Button
          title="Delete"
          onPress={() => props.userDeleteAction(selectedUser)}
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
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15
  },
})

export default connect(
  (state) => ({
    user: state.user
  }),
  { userDeleteAction, closeModalAction }
)(UserDetail)
