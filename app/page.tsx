/*
The essence of this code to the codebase in which it is found is to provide a simple and secure way for users to access the application's home page. The useSession hook ensures that only authenticated users can access the page. The header, gallery, and footer components are likely to be used on other pages of the application, so this code provides a common way to render these components.
*/
"use client";
import { useSession } from "next-auth/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <></>;
  }

  return (
    <main>
      <Header />
      <Gallery />
      <Footer />
    </main>
  );
}
