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
