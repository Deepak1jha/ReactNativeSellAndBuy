import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from "../../config/colors";
import ListItem from "../listItem/ListItem";


export default function ListingDetailScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../../../assets/jacket.jpg")}/>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>asdasdadas</Text>
        <Text style={styles.price}>sdfsdfsdfs</Text>
        <View style={styles.userContainer}>
          <ListItem subTitle={"5 Items Listing"} title={"deepak jha"} image={require("../../../assets/deepak.png")}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 300
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10
  },
  userContainer:{
    marginVertical:40
  }
})
