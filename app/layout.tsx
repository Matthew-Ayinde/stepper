import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";
import { SocketProvider } from "@/components/providers/SocketProvider";
import { ConnectionStatus } from "@/components/shared/ConnectionStatus";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stepper",
  description: "A e commerce platform for your footwear needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans antialiased bg-white text-black`}
        style={{ fontFamily: 'var(--font-dm-sans)' }}
      >
        <SocketProvider>
          <Toaster position="top-right" richColors />
          <ConnectionStatus />
          <Navbar />
          {children}
          <Footer />
        </SocketProvider>
      </body>
    </html>
  );
}
