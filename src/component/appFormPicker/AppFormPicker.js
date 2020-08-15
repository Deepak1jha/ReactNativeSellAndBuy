import React from 'react';
import {useFormikContext} from "formik";
import AppPicker from "../../component/appPicker/AppPicker";
import ErrorMessage from "../../component/errorMessage/ErrorMessage";

export default function AppFromPicker({items, name, placeholder}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        onSelectedItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]}/>
    </>
  )

}
