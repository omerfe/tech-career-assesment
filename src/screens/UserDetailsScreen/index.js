import { View, Text, ActivityIndicator } from 'react-native'
import {React, useState, useEffect} from 'react'
import baseManager from '../../api/baseManager';
import UserDetails from '../../components/UserDetails';

const UserDetailsScreen = ({route}) => {
  const id = route.params.id;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const getUser = () => {
   baseManager.getEntityById("/users", id)
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((err) => {
            console.log('Error while fetching data:', err);
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
      <UserDetails user={user}/>
    }
    </View>
  )
}

export default UserDetailsScreen