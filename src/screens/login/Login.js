import React from 'react';
import {Image, StyleSheet} from "react-native";
import Screen from "../../component/screen/Screen";
import AppButton from "../../component/button/AppButton";
import {Formik} from "formik";
import * as Yup from "yup";
import AppFormField from "../../component/appFormField/AppFormField";

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
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppFormField
              name="username"
              icon="email"
              placeholder="Email"
              autoCapitilize="none"
              autoCorrect={false}
              keyboardType={"email-address"}
            />
            <AppFormField
              autoCorrect={false}
              autoCapitilize="none"
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
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
