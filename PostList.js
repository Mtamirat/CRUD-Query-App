import React, {
    useState,
  } from "react";
  
  import {
    View,
    Text,
    Button,
    TextInput,
    FlatList,
    StyleSheet,
  } from "react-native";
  
  export default function PostList({
  
    posts,
  
    onDelete,
  
    onUpdate,
  
    onPatch,
  
  }) {
  
    const [
      editId,
      setEditId,
    ] = useState(null);
  
    const [
      title,
      setTitle,
    ] = useState("");
  
    const [
      body,
      setBody,
    ] = useState("");
  
    return (
  
      <FlatList
  
        data={posts}
  
        keyExtractor={(item) =>
          item.id.toString()
        }
  
        renderItem={({ item }) => (
  
          <View
            style={styles.card}
          >
  
            <Text
              style={styles.title}
            >
              {item.title}
            </Text>
  
            <Text
              style={styles.body}
            >
              {item.body}
            </Text>
  
            <Button
              title="Delete"
              onPress={() =>
                onDelete(item.id)
              }
            />
  
            <View style={styles.space} />
  
            <Button
              title="Patch Title"
              onPress={() =>
  
                onPatch({
                  id: item.id,
                  title:
                    "Updated Title",
                })
  
              }
            />
  
            <View style={styles.space} />
  
            <Button
              title="Edit"
              onPress={() => {
  
                setEditId(
                  item.id
                );
  
                setTitle(
                  item.title
                );
  
                setBody(
                  item.body
                );
  
              }}
            />
  
            {
  
              editId ===
              item.id && (
  
                <View>
  
                  <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={
                      setTitle
                    }
                  />
  
                  <TextInput
                    style={styles.input}
                    value={body}
                    onChangeText={
                      setBody
                    }
                  />
  
                  <Button
                    title="Save"
  
                    onPress={() => {
  
                      onUpdate({
  
                        id: item.id,
  
                        title,
  
                        body,
  
                        userId:
                          item.userId,
  
                      });
  
                      setEditId(
                        null
                      );
  
                    }}
  
                  />
  
                </View>
  
              )
  
            }
  
          </View>
  
        )}
  
      />
  
    );
  
  }
  
  const styles =
  StyleSheet.create({
  
    card: {
  
      backgroundColor:
        "white",
  
      padding: 15,
  
      marginBottom: 15,
  
      borderRadius: 10,
  
    },
  
    title: {
  
      fontSize: 18,
  
      fontWeight:
        "bold",
  
      marginBottom: 5,
  
      color: "black",
  
    },
  
    body: {
  
      marginBottom: 10,
  
      color: "black",
  
    },
  
    input: {
  
      borderWidth: 1,
  
      borderColor: "#ccc",
  
      padding: 10,
  
      marginTop: 10,
  
      borderRadius: 8,
  
    },
  
    space: {
      height: 8,
    },
  
  });