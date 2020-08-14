import React from 'react';
import AppTextInput from "../appTextInput/AppTextInput";
import {Text} from "react-native";
import {useFormikContext} from "formik";

export default function AppFormField({name, ...otherProps}) {

  const {touched, errors, handleChange, setFieldTouched} = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {touched[name] && <Text style={{color: "red"}}>{errors[name]}</Text>}
    </>
  )

}
