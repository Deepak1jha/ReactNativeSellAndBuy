import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from "../listItem/ListItem";
import Screen from "../screen/Screen";
import ListItemSeparator from "../listItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../deleteitem/LitsItemDeleteAction";

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

  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = id => {
    setMessages(messages.filter(m => m.id !== id))
  }

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
            onPress={() => console.log("")}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item.id)}/>}
          />}
        ItemSeparatorComponent={() => <ListItemSeparator/>}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../../../assets/couch.jpg")
            }
          ])
        }}
      /></Screen>
  );
}

const styles = StyleSheet.create({})
