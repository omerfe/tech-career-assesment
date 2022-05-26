import { View, Text, ActivityIndicator } from 'react-native'
import {React, useState, useEffect} from 'react'
import baseManager from '../../api/baseManager';

const UserDetailsScreen = (id) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const getUser = () => {
    baseManager.getEntityById("users", id)
      .then((data) => {
        console.log(data);
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
          console.log('ERR', err);
      })
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <View>
    { loading ? 
      <ActivityIndicator size="large"/>
       : 
      <Text>{user.name}</Text>
    }
    </View>
  )
}

export default UserDetailsScreen