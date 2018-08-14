import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import STYLES from '../../constants/styles'

const UserItem = (props) => {
  const { user } = props

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/user.png')}
      />
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
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  text: {
    color: '#eee',
    fontSize: 30,
  }
})

export default UserItem
