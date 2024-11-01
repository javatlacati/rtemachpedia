import {FC, useState} from 'react';
import {Card} from "primereact/card";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Inplace, InplaceContent, InplaceDisplay} from "primereact/inplace";

interface Faq {
  enunciado: string;
  respuesta: string;
  fuente: string;
}

interface FaqProps {
}

const Faq: FC<FaqProps> = () => {

  const faqs: Faq[] = [
    {
      enunciado: 'Si soy mujer, ¿Puedo ir a los compas de hierro?',
      respuesta: 'Sí',
      fuente: 'https://www.youtube.com/live/4zvABlShz5w?si=B9gtOrq6JM7ZDXX_&t=860',
    },
    {
      enunciado: '¿Cuanto cuesta ir a los compas de hierro?',
      respuesta: 'Nada, es gratis',
      fuente: 'https://www.youtube.com/live/4zvABlShz5w?si=B9gtOrq6JM7ZDXX_&t=860',
    },
  ];

  const [currentFaq] = useState<number | undefined>(null);

  return (
    <Card header="Preguntas frecuentes">
      <Accordion activeIndex={currentFaq}>

        {faqs.map((faq, index) => (

          <AccordionTab key={index} header={faq.enunciado}>
            <div className="grid grid-cols-2 gap-1.5">
              <p>{faq.respuesta}</p>
              <Inplace>
                <InplaceDisplay>Fuente</InplaceDisplay>
                <InplaceContent>
                  <p className="m-0">
                    <a href={faq.fuente} target="_blank">Canal de youtube</a>
                </p>
              </InplaceContent>
            </Inplace>
            </div>
          </AccordionTab>


        ))}
      </Accordion>
    </Card>
  );
};

export default Faq;
