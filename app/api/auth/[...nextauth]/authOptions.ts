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
