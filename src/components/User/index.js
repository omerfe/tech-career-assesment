import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import {MaterialIcons, Octicons} from '@expo/vector-icons'

const User = ({user}) => {
  const navigation = useNavigation();

  return (
      <Pressable onPress={() => navigation.navigate("UserDetails", {id: user.id})} style={styles.container}>
        <View style={styles.row}>
          <Octicons name='verified' size={16}/>
          <Text style={styles.name}>{user.name.slice(0,10)}</Text>
          <Text style={styles.userName}>@{user.username}</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name='work-outline' size={16} />
          <Text style={styles.description}>Works at: </Text>
          <Text style={{fontWeight: '500'}}>{user.company.name}</Text>
        </View>
      </Pressable>
  )
}

export default User