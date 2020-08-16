import React from 'react';
import {StyleSheet} from 'react-native';
import ImageInputList from "../imageInputList/ImageInputList";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {useFormikContext} from "formik";

export default function FormImagePicker({name}) {

  const {errors, setFieldValue, touched, values} = useFormikContext();

  const handleAdd = uri => {
    setFieldValue(name, [...values[name], uri])
  }
  const handleRemove = uri => {
    setFieldValue(name,values[name].filter(imageUri => imageUri !== uri))
  }


  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1
  },
  image: {
    marginRight: 10
  }
})
