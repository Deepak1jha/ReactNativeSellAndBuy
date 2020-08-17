import * as SecureStore from 'expo-secure-store';

const key = "accessToken";

const setAccessToken = async token => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (e) {
    console.log("Error During storing Auth Token")
  }
}

const getAccessToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    console.log("Error During Getting Auth Token")
  }
}

const removeAccessToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.log("Error During Deleting Auth Token")
  }
}

export {getAccessToken, setAccessToken, removeAccessToken};
