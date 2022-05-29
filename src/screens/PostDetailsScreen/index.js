import { View, ActivityIndicator } from 'react-native'
import {React, useState, useEffect} from 'react'
import baseManager from '../../api/baseManager';
import PostDetails from '../../components/PostDetails';

const PostDetailsScreen = ({route}) => {
  const id = route.params.id;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    await baseManager.getEntityById("/posts", id)
         .then((data) => {
          setPost(data);
           setLoading(false);
         })
         .catch((err) => {
             console.log('Error while fetching data:', err);
         })
   }

   useEffect(() => {
    getPost();
  }, [])

  return (
    <View style={{flex: 1}}>
    { loading ? 
      <ActivityIndicator size="large"/>
       : 
      <PostDetails post={post}/>
    }
    </View>
  )
}

export default PostDetailsScreen