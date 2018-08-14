import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import UserItem from './UserItem'

const UserList = (props) => {
  const { users } = props

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {
          users.map((user, index) => (
            <TouchableOpacity
              key={index}
              style={styles.touchableContainer}
              onPress={() => {
                props.onSelectUser(user)
              }}
            >
              <UserItem user={user} />
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    width: '100%'
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  touchableContainer: {
    width: '100%'
  }
})

export default UserList