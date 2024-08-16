import LayoutComponents from "@/components/ui/layout-components";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Question } from "@/lib/constant";

const QuestionSection = () => {
  return (
    <LayoutComponents className="bg-white dark:bg-neutral-700 h-full">
      <h1 className="flex flex-col items-center justify-center pt-10">FAQ</h1>
      <div className="mt-[40px] items-center justify-center px-4 md:px-8 lg:px-16 gap-4">
        {Question.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>
                <h2>{item.question}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </LayoutComponents>
  );
};

export default QuestionSection;
