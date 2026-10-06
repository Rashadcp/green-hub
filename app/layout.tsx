import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  title: "Green Hub — Premium Solar Energy",
  description: "Solar systems built for the way you live.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
