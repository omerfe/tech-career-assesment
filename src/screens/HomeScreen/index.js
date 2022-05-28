import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import {React, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import baseManager from '../../api/baseManager';
import Post from '../../components/Post';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const data = await baseManager.getAll("/posts");  
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, [])

  const shuffleArray = (posts) => {
    for (var i = posts.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = posts[i];
        posts[i] = posts[j];
        posts[j] = temp;
    }
    return posts;
}

  return (
    
      <ScrollView style={{padding: 10}} showsVerticalScrollIndicator={false} >
      { loading ? (
        <View>
            <ActivityIndicator size="large" />
        </View>) : 
        posts && shuffleArray(posts).map((post) => <Post key={post.id} post={post} />)
      }
    </ScrollView>
    
  )
}

export default HomeScreen