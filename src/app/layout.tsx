// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        {/* Wrap the app in AuthProvider for NextAuth session management */}
        <AuthProvider>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <main style={{ flexGrow: 1 }}>
              {children} {/* Render child layouts or pages */}
            </main>
          </div>
          <Navbar /> {/* Display Navbar at the bottom of every page */}
        </AuthProvider>
      </body>
    </html>
  );
}
