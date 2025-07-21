'use client';

import { Menu, XIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';
import { generateClamp } from '@/function/generate-clamp';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 13, 18, 0.4)', 'rgba(10, 13, 18, 0.7)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(40px)']
  );

  const sectionIds = navigationData.map((data) => data.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  return (
    <header
      className='flex-center fixed z-50 w-full'
      style={{ top: generateClamp(20, 32, 1440) }}
    >
      <motion.div
        style={{
          background,
          backdropFilter: backdropBlur,
        }}
        className='flex h-12 w-full items-center justify-between gap-4 rounded-full border border-neutral-900 px-6 max-lg:mx-5 lg:h-16 lg:max-w-207'
      >
        <Link
          href='#home'
          className='z-10 cursor-pointer transition-all hover:scale-105'
        >
          <Image
            src='/images/logo-white.png'
            alt='logo'
            width={0}
            height={0}
            sizes='100vw'
            priority
            style={{ width: generateClamp(88, 123, 1440), height: 'auto' }}
          />
        </Link>
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-4 whitespace-nowrap'>
            {navigationData.map((nav) => (
              <Link
                key={nav.label}
                href={nav.href}
                className={cn(
                  'hover:text-primary-300 text-neutral-25 text-sm-regular flex-center hidden h-9 px-4 py-2 transition-all duration-300 lg:block',
                  activeSection === nav.href.replace('#', '') &&
                    'hover: text-neutral-25 hover:text-primary-300 font-bold transition-all duration-300'
                )}
              >
                {nav.label}
              </Link>
            ))}
          </ul>
        </nav>
        <Button className='hover:shadow-blue-glow mr-5 hidden h-10 w-40 lg:flex'>
          Join Now
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer hover:scale-105 lg:hidden' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='flex-between mt-5 h-12 rounded-full border border-neutral-200 px-6'>
              <SheetClose asChild>
                <Link href='#home'>
                  <Image
                    src='/images/logo-sheet.png'
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='h-auto w-22 cursor-pointer hover:scale-105'
                  />
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <XIcon className='size-6 cursor-pointer text-neutral-950 hover:opacity-50' />
              </SheetClose>
            </SheetHeader>
            <nav className='mt-6'>
              <ul className='flex-center flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label} className='hover:scale-105'>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className={cn(
                          'hover:text-primary-300 text-sm-regular text-neutral-950 transition-all duration-300',
                          activeSection === data.href.replace('#', '') &&
                            'text-primary-300 font-bold transition-all duration-300'
                        )}
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetClose asChild>
              <Button asChild className='hover:shadow-blue-glow mt-4 w-full'>
                <Link href='#contact' className='flex-center'>
                  Join Now
                </Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </motion.div>
    </header>
  );
};

export default Navbar;
