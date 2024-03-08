import "./globals.css";
import { Josefin_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import SessionWrapper from "@/components/SessionWrapper";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased ",
            fontSans.variable,
          )}
        >
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
