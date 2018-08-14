import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import UserItem from './UserItem'

const UserList = (props) => {
  const { users } = props

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {
          users.map((user, index) => (
            <UserItem key={index} user={user} />
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
  }
})

export default UserList