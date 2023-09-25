/*
The essence of the StateProvider component to the codebase in which it is found is to provide a central place to manage the application's state. This makes it easy for all of the application's components to access the state without having to worry about how it is being managed.
*/
"use client";
import { createContext, useState, useEffect } from "react";
import { galleryData } from "../app/libraries/data";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const StateContext = createContext();

export default function StateProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataToRender, setDataToRender] = useState(galleryData);
  const isSearchActive = searchTerm.trim() !== "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [errorM, setErrorM] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postEmail, setPostEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (isSearchActive) {
      setDataToRender(
        galleryData.filter((item) =>
          item.continent.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setDataToRender(galleryData);
    }
  }, [searchTerm, isSearchActive]);

  async function handleSignIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        setEmail("");
        setPassword("");
        setIsLoggedIn(true);
        console.log(userCredential);
      }
    } catch (error) {
      setErrorM(
        "Invalid login parameters. Please use the default login parameters"
      );
      setEmail("");
      setPassword("");
      console.log(error);
      setTimeout(() => {
        setErrorM("");
      }, 5000);
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setIsLoggedIn(false);
      })
      .catch((error) => console.log(error));
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({ postEmail }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponseMessage(
        `${data.postEmail} shine your eyes!`
      );
      setPostEmail("");
      setTimeout(() => {
        setResponseMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        dataToRender,
        setDataToRender,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleSignUp,
        authUser,
        setAuthUser,
        handleSignOut,
        errorM,
        isLoggedIn,
        postEmail,
        setPostEmail,
        responseMessage,
        setResponseMessage,
        handleSubmit,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
