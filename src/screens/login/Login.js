import React from 'react';
import {Button, Image, StyleSheet, Text} from "react-native";
import Screen from "../../component/screen/Screen";
import AppTextInput from "../../component/appTextInput/AppTextInput";
import AppButton from "../../component/button/AppButton";
import {Formik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().email().label("Username"),
  password: Yup.string().required().min(4).label("Password")
})

export default function Login() {

  return (
    <Screen style={styles.container}>
      <Image source={require("../../../assets/logo-red.png")} style={styles.logo}/>
      <Formik initialValues={{username: "", password: ""}}
              onSubmit={values => console.log(values)}
              validationSchema={validationSchema}
      >
        {({handleChange, handleSubmit, errors}) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitilize="none"
              autoCorrect={false}
              keyboardType={"email-address"}
              onChangeText={handleChange("username")}
            />
            <Text style={{color: "red"}}>{errors.username}</Text>
            <AppTextInput
              autoCorrect={false}
              autoCapitilize="none"
              icon="lock"
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <Text style={{color: "red"}}>{errors.password}</Text>
            <AppButton title="Login" onPress={handleSubmit}/>
            <Button title="click" onPress={handleSubmit}/>
          </>
        )}
      </Formik>


    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  }
})
