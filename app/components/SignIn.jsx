"use client";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

export default function SignIn() {
  const { email, setEmail, password, setPassword, handleSignIn } =
    useContext(StateContext);

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSignIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
