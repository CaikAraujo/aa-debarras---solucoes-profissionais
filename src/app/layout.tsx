import type { Metadata } from "next";
import { Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AA Débarras | Esvaziamento e Limpeza Profissional na Suíça",
  description: "Líderes em esvaziamento de casas, apartamentos e escritórios em Genebra e Vaud. Serviço rápido, discreto e eco-responsável. Contacte-nos para um orçamento gratuito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} ${libre.variable} antialiased font-sans bg-zinc-50 text-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}
