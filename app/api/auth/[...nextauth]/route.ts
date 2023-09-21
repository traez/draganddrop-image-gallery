/*
The essence of this code to the codebase in which it is found is to provide a secure way for users to authenticate and access the API. It is likely to be used by other parts of the codebase to authorize users to perform certain actions.
*/
import { authOptions } from "./authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
