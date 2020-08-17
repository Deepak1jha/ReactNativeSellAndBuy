import React from 'react';
import * as Yup from "yup";
import Screen from "../../component/screen/Screen";
import AppForm from "../../component/appForm/AppForm";
import AppFormField from "../../component/appFormField/AppFormField";
import AppFormPicker from "../../component/appFormPicker/AppFormPicker";
import {StyleSheet} from "react-native";
import FormImagePicker from "../../component/formImagePicker/FormImagePicker";
import SubmitButton from "../../component/submitButton/SubmitButton";
import useLocation from "../../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().required().min(1, "Please select at least one image")
});

const categories = [
  {label: "Mobile", value: 1},
  {label: "TV", value: 2},
  {label: "Laptop", value: 3},
  {label: "Desktop", value: 4}
]

export default function ListingEditScreen({items, name, placeholder}) {

  const location = useLocation();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          description: "",
          price: "",
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(location + "+++")}
        validationSchema={validationSchema}
      >
        <FormImagePicker name={"images"}/>
        <AppFormField maxLength={255} name="title" placeholder="Title"/>
        <AppFormField name="price" keyboardType="numeric" maxLength={8} placeholder="Price"/>
        <AppFormPicker items={categories} name="category" placeholder="Category"/>
        <AppFormField name="description" multiline numberOfLines={3} maxLength={255} placeholder="Price"/>
        <SubmitButton title={"click"}/>
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
