import { Conclusion } from "@/components/Conclusion";
import { Introduction } from "@/components/Intro";
import { KeyAspects } from "@/components/KeyAspects";
import { Resume } from "@/components/Resume";
import { Title } from "@/components/ui/text";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 container px-4 my-12 md:px-24 md:my-24">
        <Title>JavaScript: El Poder del Desarrollo Web Dinámico</Title>
        <Introduction/>
        <KeyAspects/>
        <Resume/>
        <Conclusion/>
    </main>
  );
}
