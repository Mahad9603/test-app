import React, { createContext, useState } from "react";
import axiosInstance from "../axios/axios.js";
import toast, { Toaster } from "react-hot-toast";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginUser, setLoginUser] = useState([])
  const signup = async (name, email, password) => {
    try {
      const response = await axiosInstance.post("users", {
        name,
        email,
        password,
      });

      console.log(response.data);
      toast.success("Successfully registered!"); // Display success toast notification

      return response;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const login = async (email, password) => {
    try {
        console.log(email, password)
      const response = await axiosInstance.get("users");
      setLoginUser(response.data.data)
      console.log(response.data.data)
      let findingUser = loginUser.find(user => user.email == email)
      console.log(findingUser)
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Error logging in");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        user,
      }}
    >
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};
