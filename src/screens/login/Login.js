import React from 'react';
import {Image, StyleSheet} from "react-native";
import Screen from "../../component/screen/Screen";
import AppTextInput from "../../component/appTextInput/AppTextInput";
import AppButton from "../../component/button/AppButton";
import {Formik} from "formik";

export default function Login() {

  return (
    <Screen style={styles.container}>
      <Image source={require("../../../assets/logo-red.png")} style={styles.logo}/>

      <Formik initialValues={{username: "", password: ""}} onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitilize="none"
              autoCorrect={false}
              keyboardType={"email-address"}
              onChangeText={handleChange("username")}
            />
            <AppTextInput
              autoCorrect={false}
              autoCapitilize="none"
              icon="lock"
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppButton title="Login" onPress={handleSubmit}/>
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
