/*
the essence of this code is to provide a configuration for implementing email and password-based authentication using NextAuth.js in your Next.js application. It defines how authentication should work and what the expected credentials are.
*/
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email; Type-in user@example.com" },
        password: { label: "Password; Type-in 1Password" },
      },
      authorize(credentials, req) {
        // Perform database operations

        if (
          credentials?.email === "user@example.com" &&
          credentials.password === "1Password"
        ) {
          return {
            id: "1",
            email: "user@example.com",
          };
        }

        return null;
      },
    }),
  ],
};
