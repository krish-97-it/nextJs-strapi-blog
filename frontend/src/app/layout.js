import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header";
import AddBootstrap from "./bootstrap";
import Footer from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Your Blogs",
    description: "By Krishmish"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" type="image/png" href="./icon.png"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
        </head>
        <body>
            <Navbar/>
            {children}
            <Footer/>
            <AddBootstrap/>
        </body>
    </html>
  );
}
