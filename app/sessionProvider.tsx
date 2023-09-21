/*
The essence of the NextAuthSessionProvider component to the codebase in which it is found is to provide a central place for managing the NextAuth.js session data. This makes it easy for all of the application's components to access the session data without having to worry about how it is being managed.
*/
"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

interface Props {
  children?: React.ReactNode;
}

export default function NextAuthSessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
