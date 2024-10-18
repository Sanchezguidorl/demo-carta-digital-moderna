import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import LocalContextProvider from "./src/contexts/LocalContextProvider";
import RestaurantContextProvider from "./src/contexts/RestaurantContextProvider";


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
    <html lang="es" className="bg-red h-full max-h-[100vh] w-full overflow-auto text-white">

      <RestaurantContextProvider>

      <LocalContextProvider>
      <body className={`${Antiqua.className} h-full`}>
        {children}</body>
      </LocalContextProvider>
      </RestaurantContextProvider>
    </html>
  );
}
