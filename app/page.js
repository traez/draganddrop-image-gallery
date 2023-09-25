/*
The essence of the code you provided is to render the appropriate component based on the user's login status. If the user is logged in, the Gallery component is rendered. Otherwise, the Login component is rendered.
*/
"use client";
import { useContext } from "react";
import { StateContext } from "./StateProvider";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";

export default function Home() {
  const { isLoggedIn } = useContext(StateContext);

  return <>{isLoggedIn ? <Gallery /> : <Login />}</>;
}
