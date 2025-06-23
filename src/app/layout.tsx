import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // O CSS do fundo animado deve estar neste arquivo

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elison Felipe",
  description: "portfólio",
  icons:{
    icon: './images/icon.png' // Verifique se este caminho está correto a partir da pasta 'public' ou se é um import
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-br">
      <body className={inter.className}>
        {/* 1. Adicione o div para o fundo animado aqui */}
        <div className="animated-universe-background" /> {/* Pode ser auto-fechável */}

        {/* 2. Envolva o {children} com um container para o conteúdo da página */}
        <main className="page-content">
          {children}
        </main>
      </body>
    </html>
  );
}