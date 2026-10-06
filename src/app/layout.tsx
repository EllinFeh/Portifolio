import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL("https://elisonfelipe.dev"), title: { default: "Elison Felipe — Desenvolvedor Full Stack", template: "%s | Elison Felipe" }, description: "Desenvolvedor Full Stack especializado em sistemas com IA, automação e arquitetura de software escalável.", openGraph: { type: "website", locale: "pt_BR", title: "Elison Felipe — Desenvolvedor Full Stack", description: "Software para produção com inteligência artificial." }, twitter: { card: "summary_large_image" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
