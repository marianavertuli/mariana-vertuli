import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "./components/header";
import { ThemeProvider } from "@/providers/theme";


export const metadata: Metadata = {
  title: "Mariana Vertuli",
  description: "Mariana Vertuli - Full Stack Software Engineer",
  keywords: ["Mariana", "Vertuli", "full stack", "software developer", "software", "software engineer"],
  openGraph: {
    images: [`${process.env.NEXT_PUBLIC_URL}/about-me.jpg`],
    title: "Mariana Vertuli - Full Stack Software Engineer"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Header/>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
