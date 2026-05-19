import React, {
    useState,
  } from "react";
  
  import {
    View,
    TextInput,
    Button,
    StyleSheet,
  } from "react-native";
  
  export default function CreatePost({
    onSubmit,
  }) {
  
    const [
      title,
      setTitle,
    ] = useState("");
  
    const [
      body,
      setBody,
    ] = useState("");
  
    return (
  
      <View>
  
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Body"
          value={body}
          onChangeText={setBody}
        />
  
        <Button
          title="Create Post"
          onPress={() => {
  
            onSubmit({
              title,
              body,
              userId: 1,
            });
  
            setTitle("");
            setBody("");
  
          }}
        />
  
      </View>
  
    );
  
  }
  
  const styles =
  StyleSheet.create({
  
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 12,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: "white",
    },
  
  });