import React from 'react';
import * as Yup from "yup";
import Screen from "../../component/screen/Screen";
import AppForm from "../../component/appForm/AppForm";
import AppFormField from "../../component/appFormField/AppFormField";
import AppFormPicker from "../../component/appFormPicker/AppFormPicker";
import {StyleSheet} from "react-native";


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {label: "Mobile", value: 1},
  {label: "TV", value: 2},
  {label: "Laptop", value: 3},
  {label: "Desktop", value: 4}
]

export default function ListingEditScreen({items, name, placeholder}) {

  // const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          description: "",
          price: "",
          category: null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title"/>
        <AppFormField name="price" keyboardType="numeric" maxLength={8} placeholder="Price"/>
        <AppFormPicker items={categories} name="category" placeholder="Category"/>
        <AppFormField name="description" multiline numberOfLines={3} maxLength={255} placeholder="Price"/>
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
