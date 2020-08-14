import React from 'react';
import Text, {StyleSheet} from "react-native";


export default function ErrorMessage({error}) {

  if (!error) return null;
  return (
    <Text style={styles.error}>{error}</Text>
  )
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontWeight: "bold"
  }
})

