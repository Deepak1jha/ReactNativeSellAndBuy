import React, {useState} from 'react';
import {Image, StyleSheet} from "react-native";
import Screen from "../../component/screen/Screen";
import AppTextInput from "../../component/appTextInput/AppTextInput";
import AppButton from "../../component/button/AppButton";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.container}>
      <Image source={require("../../../assets/logo-red.png")} style={styles.logo}/>
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitilize="none"
        autoCorrect={false}
        keyboardType={"email-address"}
        onChangeText={name => setUsername(name)}
      />
      <AppTextInput
        autoCorrect={false}
        autoCapitilize="none"
        icon="lock"
        placeholder="Password"
        secureTextEntry
        onChangeText={password => setPassword(password)}
      />
      <AppButton title="Login" onPress={() => console.log(username + password)}/>

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
