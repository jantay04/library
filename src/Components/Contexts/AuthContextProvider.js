import axios from "axios";
import React, { useContext } from "react";

export const authContextProvider = React.createContext();
export const useAuth = () => useContext(authContextProvider);

const AuthContextProvider = ({ children }) => {
  const API = "  http://localhost:8000/users ";

  //? Asyn function for submit users's info

  async function RegisterUser(formData) {
    try {
      let res = await axios.post(API, formData);
    } catch (err) {
      console.log(err);
    }
  }

  //? Asyn Function for Login User ; getting TOKENS

  async function LoginUser(formData, email) {
    try {
      let res = await axios.post(API, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("user", JSON.stringify(email));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <authContextProvider.Provider
      value={{
        RegisterUser,
        LoginUser,
      }}>
      {children}
    </authContextProvider.Provider>
  );
};

export default AuthContextProvider;
