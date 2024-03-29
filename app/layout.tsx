import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Informe Javascript",
  description: "Generated by create next app. Created by Uriel Campos https://www.linkedin.com/in/uriel-campos-dev/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sections = [
    { id: 'introduction', label: 'Introducción' },
    { id: 'keyAspects', label: 'Aspectos Clave' },
    { id: 'resume', label: 'Resumen' },
    { id: 'conclusion', label: 'Conclusión' },
  ];

  const socials = [
    {
      id: 'github',
      image: '/github-mark.svg',
      url: 'https://github.com/UFCampos'
    },
    {
      id: 'linkedin',
      image: '/linkedin.svg',
      url: 'https://www.linkedin.com/in/uriel-campos-dev/'
    }
  ]
  return (
    <html lang="es">
      <body className={`${inter.className} bg-neutral-300 dark:bg-neutral-900 dark:text-white flex flex-col justify-center items-center`}>
        <Navbar sections={sections} socials={socials}/>
        {children}
        <footer className="text-center p-4">
          Código fuente: <Link target="_blank" className='underline' href="https://github.com/UFCampos/javascript-info">https://github.com/UFCampos/javascript-info</Link>
        </footer>
      </body>
    </html>
  );
}
