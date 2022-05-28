import { View, Text, Flatlist, ScrollView, ActivityIndicator } from 'react-native'
import {React, useState, useEffect} from 'react'
import baseManager from '../../api/baseManager'
import User from '../../components/User'

const UserScreen = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const data = await baseManager.getAll("/users");  
    setUsers(data);
    setLoading(false);
  }
  
  useEffect(() => {
    getUsers();
  }, [])

  const renderItem = ({ item }) => {
    return (
      <User user={item} />
  )} 

  return (
    <ScrollView style={{padding: 10}} showsVerticalScrollIndicator={false} >
      { loading ? (
        <View>
            <ActivityIndicator size="large" />
        </View>) : 
        users && users.map((user) => <User key={user.id} user={user} />)
        // <Flatlist 
        //   data={users} 
        //   renderItem={renderItem} 
        // />
      }
    </ScrollView>
  )
}

export default UserScreen