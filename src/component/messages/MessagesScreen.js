import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from "../listItem/ListItem";
import Screen from "../screen/Screen";
import ListItemSeparator from "../listItemSeparator/ListItemSeparator";

const data = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../../assets/couch.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../../assets/couch.jpg")
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../../assets/couch.jpg")
  }
]

export default function MessageScreen() {
  return (
    <Screen>
      <FlatList
        data={data}
        KeyExtractor={data => data.id.toString()}
        renderItem={({item}) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />}
        ItemSeparatorComponent={() => <ListItemSeparator/>}
      /></Screen>
  );
}

const styles = StyleSheet.create({})
