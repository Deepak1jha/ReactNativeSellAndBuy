import React, {useContext} from 'react';
import AuthContext from "../../auth/context/AuthContext";
import {removeAccessToken,storeAccessToken} from "../../auth/authStorage/AuthStorage";

const useAuth = () => {
  const {accessToken, setAccessToken} = useContext(AuthContext);

  const logOut = () => {
    setAccessToken(null);
    removeAccessToken();
  };

  const login = (token) => {
    setAccessToken(token);
    storeAccessToken(token);
  }

  return {accessToken, logOut, login, setAccessToken};
};
export default useAuth;
