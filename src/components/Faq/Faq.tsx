import {FC, useState} from 'react';
import {Card} from "primereact/card";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Inplace, InplaceContent, InplaceDisplay} from "primereact/inplace";
import {useTemachpediaState} from "../../zustand/store.ts";

const Faq: FC = () => {

  const faqs = useTemachpediaState((state) => state.faqs) || [];

  const [currentFaq] = useState<number | undefined>(undefined);

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
