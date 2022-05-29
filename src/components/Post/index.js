import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { React, useState, useEffect } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import baseManager from "../../api/baseManager";

const Post = ({ post }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const randomMinutesAgo = Math.floor((Math.random() * 60) + 1);

  const getUser = () => {
    baseManager
      .getEntityById("/users", post.userId)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error while fetching data:", err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Pressable
          onPress={() => navigation.navigate("PostDetails", { id: post.id })}
          style={styles.container}
        >
          <View style={styles.row}>
            <Octicons name="verified" size={16} />
            <Text style={styles.name}>{user.name.slice(0,10)}</Text>
            <Text style={styles.userName}>@{user.username}</Text>
            <Text style={styles.minsAgo}>&#8226; {randomMinutesAgo} mins ago</Text>
          </View>
          <Text style={styles.title}>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Post;
