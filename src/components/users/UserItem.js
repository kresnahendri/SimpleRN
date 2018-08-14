import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import STYLES from '../../constants/styles'

const UserItem = (props) => {
  const { user } = props

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: STYLES.COLOR.PRIMARY,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  text: {
    color: '#eee',
    fontSize: 30,
  }
})

export default UserItem
