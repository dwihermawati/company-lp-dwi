'use client';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { modulesData } from '@/constants/module';
import { generateClamp } from '@/function/generate-clamp';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { XIcon } from 'lucide-react';

const Module = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClick = () => {
    setDialogOpen(true);
  };

  return (
    <div className='w-full bg-gradient-to-b from-[#0093DD]/0 to-[#0093DD]/14'>
      <Section
        title='Learning Frontend Developer Tools'
        subtitle='Mastering Essential Tools for Efficient Frontend Development'
        id='module'
      >
        <Cards>
          {modulesData.map((module) => (
            <Card
              key={module.name}
              imageSrc={module.imageSrc}
              name={module.name}
              description={module.description}
              isSpecialSize={module.name === 'Figma'}
              onClick={handleClick}
            />
          ))}
        </Cards>
        <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Module Not Available</AlertDialogTitle>
              <AlertDialogCancel>
                <XIcon className='size-6 text-black hover:opacity-70' />
              </AlertDialogCancel>
            </AlertDialogHeader>
            <AlertDialogDescription>
              Sorry, this module or page is not available yet. We are working on
              it and will update it soon. Stay tuned!
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogAction className='w-50'>Back</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Section>
    </div>
  );
};

export default Module;

type CardsProps = {
  children: React.ReactNode;
};

const Cards: React.FC<CardsProps> = ({ children }) => {
  return <div className='flex flex-wrap gap-5'>{children}</div>;
};

type CardProps = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  isSpecialSize?: boolean;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  name,
  description,
  isSpecialSize,
  onClick,
}) => {
  return (
    <div
      className='hover:bg-primary-300 group flex-1 basis-80 rounded-2xl border border-neutral-200 bg-white hover:scale-101'
      style={{ boxShadow: '0px 0px 24px rgba(226, 226, 226, 0.2)' }}
    >
      <div
        className='flex-center h-74.25 w-full cursor-pointer rounded-t-2xl bg-neutral-50 group-hover:bg-neutral-100'
        onClick={onClick}
      >
        <Image
          src={imageSrc}
          alt={name}
          className={cn(isSpecialSize ? 'h-32 w-auto' : 'h-auto w-35')}
        />
      </div>

      <div style={{ padding: generateClamp(16, 20, 1248) }}>
        <h4 className='text-lg-semibold text-neutral-950 group-hover:text-white'>
          {name}
        </h4>
        <p className='text-sm-regular mt-1 text-neutral-700 group-hover:text-white'>
          {description}
        </p>
        <Button
          className='group-hover:text-primary-300 mt-6 w-full group-hover:bg-white hover:scale-103 hover:font-bold'
          onClick={onClick}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};
