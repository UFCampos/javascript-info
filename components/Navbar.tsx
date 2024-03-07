'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "./ui/nav"
import Image from "next/image";

export const Navbar = ({ sections, socials }: { sections: { id: string, label: string }[], socials: { id: string, image: string, url: string }[] }) => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
      };
      
  return (
    <Nav className="z-50 w-full justify-around p-1 sm:p-4 backdrop-blur bg-black/40">
      <h1 className="sm:hidden md:inline text-center">Uriel Campos</h1>
      <ul className="justify-center gap-4 hidden sm:flex">
        {sections.map((section, index) => (
          <li className="cursor-pointer" key={index} onClick={() => scrollToSection(section.id)}>
            <Button className="shadow text-white shadow-white/30 dark:shadow-white/50 px-4 py-2">{section.label}</Button>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center gap-4">
        {socials.map((social, index) => (
          <li className="cursor-pointer" key={index}>
            <Link href={social.url} target="_blank">
              <Button className={`shadow text-white shadow-white/30 dark:shadow-white/50 p-1 ${social.id === 'linkedin' ? 'dark:bg-white/50' : ''}`}>
                <Image className="text-white" src={social.image} alt={social.id} width={30} height={30}></Image>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
}