import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Screen from "../../component/screen/Screen";
import colors from "../../config/colors";
import Card from "../../component/card/Card";

const listing = [
  {
    id: 1,
    title: "Couch For Sale",
    price: 1000,
    image: require("../../../assets/couch.jpg")
  },
  {
    id: 2,
    title: "Adidas Shoes",
    price: 150,
    image: require("../../../assets/nikeShoes.jpg")
  },
  {
    id: 3,
    title: "Nike shoes",
    price: 1000,
    image: require("../../../assets/adidasShoes.jpg")
  },
  {
    id: 4,
    title: "Chair to sale",
    price: 100,
    image: require("../../../assets/chair.jpg")
  }

]

export default function ListingScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) =>
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetailScreen", item)}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey
  }
})
