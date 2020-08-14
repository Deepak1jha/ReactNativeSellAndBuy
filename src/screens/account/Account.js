import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Screen from "../../component/screen/Screen";
import ListItem from "../../component/listItem/ListItem";
import colors from "../../config/colors";
import Icon from "../../component/Icon";
import ListItemSeparator from "../../component/listItemSeparator/ListItemSeparator";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  }
]

export default function Account() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={"deepak kumar jha"} subTitle={"ddjha171@gmail.com"}
                  image={require("../../../assets/deepak.png")}/>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItems => menuItems.title}
          renderItem={({item}) =>
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon name={item.icon.name}
                      backgroundColor={item.icon.backgroundColor}
                />
              }
              ItemSeparatorComponent={() => ListItemSeparator}
            />}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title={"Log Out"}
          ImageComponent={
            <Icon name={"logout"} backgroundColor={"#ffe66d"}/>
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.lightGrey
  }
})
