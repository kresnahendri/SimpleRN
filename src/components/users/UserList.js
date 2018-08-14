import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import UserItem from './UserItem'
import { userSelectAction, userGetAllAction } from '../../actions/userAction'

class UserList extends Component {
  componentDidMount = () => {
    this.props.userGetAllAction()
  }

  render() {
    const { users } = this.props.user

    if (users.length === 0) {
      return <ActivityIndicator />
    }
    
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          {
            users.map((user, index) => (
              <TouchableOpacity
                key={index}
                style={styles.touchableContainer}
                onPress={() => this.props.userSelectAction(user)}
              >
                <UserItem user={user} />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    )
  }
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

export default connect(
  (state) => ({
    user: state.user
  }),
  { userSelectAction, userGetAllAction }
)(UserList)