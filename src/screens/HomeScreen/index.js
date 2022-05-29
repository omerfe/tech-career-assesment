import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import baseManager from "../../api/baseManager";
import Post from "../../components/Post";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const data = await baseManager.getAll("/posts");
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const shufflePostsAndGetFirstTwenty = (posts) => {
    for (var i = posts.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = posts[i];
      posts[i] = posts[j];
      posts[j] = temp;
    }
    return posts.slice(0, 20);
  };

  const renderItem = ({ item }) => {
    return <Post post={item} />;
  };

  return (
    <View style={{ padding: 10 }}>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={shufflePostsAndGetFirstTwenty(posts)}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default HomeScreen;
