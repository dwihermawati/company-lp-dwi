import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from '@/constants/faq-data';

const FAQ = () => {
  return (
    <Section
      title='Frequently Asked Questions'
      subtitle='Everything you need to know before starting your journey to become a frontend developer.'
      id='faq'
    >
      <Accordion
        type='single'
        collapsible
        className='mx-auto w-full md:max-w-170.5'
      >
        {FAQData.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
