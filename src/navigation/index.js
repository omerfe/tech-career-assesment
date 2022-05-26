import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import PostDetailsScreen from '../screens/PostDetailsScreen'
import SearchScreen from '../screens/SearchScreen'
import UserScreen from '../screens/UserScreen'
import UserDetailsScreen from '../screens/UserDetailsScreen'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#000' }}>
            <Tab.Screen 
                name='Home'
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name='home' size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name='search1' size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name='User'
                component={UserStackNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name='user' size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Posts' component={HomeScreen} />
            <HomeStack.Screen name='PostDetails' component={PostDetailsScreen} />
        </HomeStack.Navigator>

    )
}

const UserStack = createNativeStackNavigator();

const UserStackNavigator = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name='Users' component={UserScreen} />
            <UserStack.Screen name='UserDetails' component={UserDetailsScreen} />
        </UserStack.Navigator>
    )
}

export default RootNavigator