import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const Antiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400","500", "600", "700","900"], // Define uno o más pesos
});

export const metadata: Metadata = {
  title: "Menú digital",
  description: "Carta moderna para visualizar la lista de platos en el menú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-red max-h-[100vh] overflow-scroll text-white">
      <body className={`${Antiqua.className} h-full relative`}>{children}</body>
    </html>
  );
}
