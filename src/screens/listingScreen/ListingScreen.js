import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Screen from "../../component/screen/Screen";
import Card from "../../component/card/Card";
import colors from "../../config/colors";

const listing = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../../../assets/jacket.jpg")
  },
  {
    id: 2,
    title: "Chair to sale",
    price: 150,
    image: require("../../../assets/jacket.jpg")
  },
  {
    id: 3,
    title: "Couch of sale",
    price: 1000,
    image: require("../../../assets/couch.jpg")
  },
  {
    id: 4,
    title: "Logo to sale",
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
            onPress={()=>navigation.navigate("ListingDetailScreen",item)}
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
