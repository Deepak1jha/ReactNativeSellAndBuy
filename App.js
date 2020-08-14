import React from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import Icon from "./src/component/Icon";
import ListItem from "./src/component/listItem/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title={"Deepak"}
        subTitle={"kumar jha"}
        ImageComponent={<Icon backgroundColor={"red"} size={50} name={"email"} iconColor={"white"}/>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
