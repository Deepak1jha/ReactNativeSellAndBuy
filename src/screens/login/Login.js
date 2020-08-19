import React, {useState} from 'react';
import {Image, StyleSheet} from "react-native";
import Screen from "../../component/screen/Screen";
import * as Yup from "yup";
import AppFormField from "../../component/appFormField/AppFormField";
import SubmitButton from "../../component/submitButton/SubmitButton";
import AppForm from "../../component/appForm/AppForm";
import AuthService from "../../service/auth/AuthService";
import ErrorMessage from "../../component/errorMessage/ErrorMessage";
import useAuth from "../../hooks/auth/useAuth";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(2).label("Password")
})

export default function Login(props) {
  const {login} = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({username, password}) => {
    const result = await AuthService.login(username, password);
    if (result.status !== 200) {
      setLoginFailed(false)
    } else {
      login(result.data.accessToken)
    }
  }

  return (
    <Screen style={styles.container}>
      <Image source={require("../../../assets/logo-red.png")} style={styles.logo}/>
      <AppForm initialValues={{username: "", password: ""}}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
      >
        {loginFailed && <ErrorMessage error={"Invalid Username Or Password"}/>}
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
        <SubmitButton title={"Login"}/>
      </AppForm>


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
