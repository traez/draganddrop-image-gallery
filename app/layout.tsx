import "./globals.css";
import NextAuthSessionProvider from "./sessionProvider";
import StateProvider from "./StateProvider";

export const metadata = {
  title: "Drag and Drop Image Gallery",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StateProvider>
        <body>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </body>
      </StateProvider>
    </html>
  );
}
