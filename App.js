import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Screen from "./src/component/screen/Screen";
import AppPicker from "./src/component/appPicker/AppPicker";

const categories = [
  {label: "Mobile", value: 1},
  {label: "TV", value: 2},
  {label: "Laptop", value: 3},
  {label: "Tablet", value: 4}
]

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={item => setCategory(item)}
        items={categories}
        placeholder={"Category"}
        icon={"apps"}/>
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
