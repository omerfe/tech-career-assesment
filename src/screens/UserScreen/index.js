import { View, FlatList, ActivityIndicator } from 'react-native'
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
    <View style={{padding: 10}} >
      { loading ? (
        <View>
            <ActivityIndicator size="large" />
        </View>) : 
        <FlatList 
          data={users}
          keyExtractor={(item) => item.id} 
          renderItem={renderItem} 
          showsVerticalScrollIndicator={false} 
        />
      }
    </View>
  )
}

export default UserScreen