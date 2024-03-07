import Image from "next/image";
import { Scroller } from "./Scroller";
import { Card } from "./ui/card";
import { Subtitle } from "./ui/text";
import Link from "next/link";

export const Resume: React.FC = () => {
    return (
      <Scroller id="resume">
        <Card>
          <Subtitle>Resumen</Subtitle>
          <p>En resumen, JavaScript se erige como el eje del desarrollo web moderno. Su naturaleza dinámica, versatilidad, rico ecosistema, compatibilidad entre navegadores y medidas de seguridad lo convierten en una herramienta indispensable para la creación de aplicaciones web robustas e interactivas. Ya sea utilizado para scripting del lado del cliente o para el desarrollo del lado del servidor, JavaScript ha demostrado su valía en la formación del panorama digital.</p>
            <Link href="https://discountdash.vercel.app/" target="_blank">
              <Image className="rounded cursor-pointer m-2 p-4 self-center" src={'/discoundash.png'} alt="discountdash" width={1000} height={1000}>
              </Image>
            </Link>
        </Card>
      </Scroller>
    );
  };
