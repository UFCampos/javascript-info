import { HTMLAttributes } from "react";
import { Card } from "./ui/card"
import { Subtitle, Title } from "./ui/text";
import { Scroller } from "./Scroller";

export const Introduction: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
    return (
        <Scroller id="introduction">
          <Card>
            <Subtitle>Introducción</Subtitle>
            <p className="px-4">
                JavaScript, el lenguaje de script dinámico, se ha convertido en una piedra angular en el desarrollo web moderno. Diseñado inicialmente para mejorar las interacciones del usuario dentro de los navegadores web, ha evolucionado hacia un lenguaje de programación versátil y potente utilizado tanto para el desarrollo del lado del cliente como del servidor. Este artículo informativo profundiza en los aspectos fundamentales de JavaScript, sus aplicaciones y su impacto transformador en el panorama digital.
            </p>
            <span className="aspect-w-16 aspect-h-9">
                <iframe allowFullScreen src="https://www.youtube.com/embed/IhefptpMcq4?si=RL3tnrEBZ8B9NRFB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </span>
          </Card>
        </Scroller>
      
    );
  };
