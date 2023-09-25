/*
The essence of the RootLayout component to the codebase in which it is found is to provide a central place for managing the application's state and session data. This makes it easy for all of the application's components to access the state and session data without having to worry about how it is being managed.
In addition, the RootLayout component is responsible for setting the metadata for the application, such as the title and description. This metadata is used by search engines and other applications to display information about the application.
*/
import "./globals.css";
import StateProvider from "./StateProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Drag and Drop Image Gallery",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateProvider>
        <body>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </StateProvider>
    </html>
  );
}
