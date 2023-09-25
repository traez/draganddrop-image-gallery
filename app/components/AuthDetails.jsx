"use client";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

export default function AuthDetails() {
  const { authUser, setAuthUser, handleSignOut } = useContext(StateContext);

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
}

/*
          <button onClick={userSignOut}>Sign Out</button>
*/