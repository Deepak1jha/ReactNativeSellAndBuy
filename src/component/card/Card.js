import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from "../../config/colors";

export default function Card({title, subtitle, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}/>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  }
})
