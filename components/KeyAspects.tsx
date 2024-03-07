import { Scroller } from "./Scroller";
import { Card } from "./ui/card";
import { Subtitle, Title } from "./ui/text";

export const KeyAspects: React.FC = () => {
    const keyAspectsList = [
      {
        title: 'Interactividad Dinámica',
        description: 'JavaScript permite a los desarrolladores crear páginas web dinámicas e interactivas.',
      },
      {
        title: 'Versatilidad',
        description: 'Inicialmente diseñado para scripts del lado del cliente, JavaScript ahora amplía su alcance al desarrollo del lado del servidor a través de frameworks como Node.js.',
      },
      {
        title: 'Bibliotecas y Frameworks',
        description: 'JavaScript cuenta con un rico ecosistema de bibliotecas y frameworks, como React, Angular y Vue.js para el desarrollo del lado del cliente, y Express.js para aplicaciones del lado del servidor.',
      },
      {
        title: 'Compatibilidad entre Navegadores',
        description: 'JavaScript garantiza la compatibilidad entre navegadores, permitiendo a los desarrolladores crear aplicaciones web que funcionan sin problemas en diversos navegadores.',
      },
      {
        title: 'Medidas de Seguridad',
        description: 'Con el aumento de las amenazas web, JavaScript incorpora funciones de seguridad para proteger a los usuarios. La Política de Seguridad de Contenido (CSP) y prácticas de codificación segura ayudan a mitigar vulnerabilidades, asegurando un entorno de navegación seguro para los usuarios.',
      },
    ];
  
    return (
        <Scroller id="keyAspects">
          <Card>
            <Subtitle>Aspectos clave de JavaScript:</Subtitle>
            <ul>
            {keyAspectsList.map((aspect, index) => (
                <li className="p-2" key={index}>
                    <strong>{aspect.title}:</strong> {aspect.description}
                </li>
            ))}
            </ul>
          </Card>
        </Scroller>

    );
  };
