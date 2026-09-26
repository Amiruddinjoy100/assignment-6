import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WorkoutProvider from "@/app/context/workoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library and training planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-black text-white">
        <WorkoutProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#15181f",
                color: "#ffffff",
                border: "1px solid #292f3a",
              },
            }}
          />
        </WorkoutProvider>
      </body>
    </html>
  );
}
