import "./globals.css";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import { FirebaseProvider } from "@/context/FirebaseContext";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "4zImprov - Transformations with Construction and Cleaning Services",
  description: "Minimizing hassle, maximizing quality. Our services ensure top-notch results with minimal disruption. Experience excellence in every project, big or small.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6Ldfq1oqAAAAAF0Oz5jnXZqsXzXbv6HOHT9xRXu5"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navigation />
        <FirebaseProvider>{children}</FirebaseProvider>
        <Footer />
      </body>
    </html>
  );
}
