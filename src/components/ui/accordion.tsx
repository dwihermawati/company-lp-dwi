'use client';

import { Icon } from '@iconify/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { generateClamp } from '@/function/generate-clamp';
import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'group bg-neutral-25 mb-4 rounded-2xl border border-neutral-200 md:rounded-4xl',
        className
      )}
      style={{
        boxShadow: '0px 0px 24px rgba(226, 226, 226, 0.2)',
        padding: generateClamp(16, 24, 1248),
      }}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group-hover:text-primary-300 group/trigger flex-between data-[state=open]:hover:text-primary-300 flex-1 cursor-pointer gap-4 text-left font-semibold text-neutral-950 transition-all data-[state=open]:text-neutral-950',
          className
        )}
        style={{
          fontSize: generateClamp(16, 18, 1248),
          lineHeight: generateClamp(30, 32, 1248),
        }}
        {...props}
      >
        <span className='flex-1 text-left'>{children}</span>
        <Icon
          icon='ic:round-plus'
          className='size-6 group-data-[state=open]/trigger:hidden'
        />
        <Icon
          icon='ic:round-minus'
          className='size-6 group-data-[state=closed]/trigger:hidden'
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular md:text-md-regular overflow-hidden'
      {...props}
    >
      <div
        className={cn('text-sm-regular text-neutral-800', className)}
        style={{ marginTop: generateClamp(12, 16, 1248) }}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
