import React from "react";

import {
  TextInput,
  StyleSheet,
} from "react-native";

export default function FilterPosts({
  userId,
  setUserId,
}) {

  return (

    <TextInput
      style={styles.input}
      placeholder="Filter User ID"
      keyboardType="numeric"
      value={userId}
      onChangeText={setUserId}
    />

  );

}

const styles =
StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "white",
  },

});