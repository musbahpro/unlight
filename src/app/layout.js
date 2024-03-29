import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
const  font = Jost({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
