import { View, Text, TextInput } from "react-native";
import { Badge } from "react-native-elements";
import { React, useState } from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const PostDetails = ({ post }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    "Wow, thanks for helping!",
    "Hey I didn't know that!",
  ]);
  const [likes, setLikes] = useState(3);
  const [isCommsPressed, setIsCommsPressed] = useState(false);
  const [isLikesPressed, setIsLikesPressed] = useState(false);
  const randomMinutesAgo = Math.floor(Math.random() * 60 + 1);

  const handleComments = () => {
    setIsCommsPressed((current) => !current);
  };

  const handleLikes = () => {
    setIsLikesPressed((current) => !current);
    if (isLikesPressed) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };

  const handleReply = () => {
    setComments([...comments, comment]);
    setComment("");
    setIsCommsPressed(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title.toUpperCase()}</Text>
      <Text style={styles.body}>
        {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
      </Text>
      <View style={styles.iconContainer}>
        <Pressable onPress={handleComments} style={styles.icon}>
          <Ionicons name="chatbox-outline" size={24} />
          <Badge
            status="warning"
            containerStyle={{ position: "absolute", top: -8, right: -8 }}
            value={comments.length}
          />
        </Pressable>
        <Pressable onPress={handleLikes}>
          {isLikesPressed ? (
            <Ionicons name="heart" size={24} />
          ) : (
            <Ionicons name="heart-outline" size={24} />
          )}
        </Pressable>
      </View>
      {isCommsPressed && (
        <View style={styles.inputContainer}>
          <TextInput
            value={comment}
            onChangeText={setComment}
            style={styles.commentInput}
            placeholder="Share your opinion on this.."
          />
          <Pressable onPress={handleReply} style={styles.replyButton}>
            <Text style={{ textAlign: "center" }}>Reply</Text>
          </Pressable>
        </View>
      )}
      <Text style={styles.likes}>&#8226; {likes} likes</Text>
      <Text style={styles.commentTitle}>Comments</Text>
      {comments.length > 0 &&
        comments.map((comment, key) => (
          <View style={styles.commentsContainer} key={key}>
            <Text>{comment}</Text>
            <Text style={styles.minsAgo}>&#8226; {randomMinutesAgo} mins ago</Text>
          </View>
        ))}
    </View>
  );
};

export default PostDetails;
