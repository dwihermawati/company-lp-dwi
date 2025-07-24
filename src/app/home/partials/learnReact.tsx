import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { iconTechData } from '@/constants/icon-tech-stack';
import { generateClamp } from '@/function/generate-clamp';

const LearnReact = () => {
  return (
    <div
      className='custom-container flex items-center gap-4 max-md:flex-col-reverse md:gap-16'
      style={{
        paddingBlock: generateClamp(40, 80, 1248),
      }}
    >
      <div className='flex-[5.0]'>
        <div className='flex-start gap-1'>
          <Icon icon='line-md:star-filled' className='size-5 text-[#F3B64C]' />
          <span className='text-sm-semibold text-neutral-950'>
            4.9 (1.672) Best Module
          </span>
        </div>
        <div
          style={{
            marginTop: generateClamp(4, 12, 1248),
            marginBottom: generateClamp(16, 32, 1248),
          }}
        >
          <h3 className='display-lg-extrabold mb-4 text-neutral-950 max-md:hidden'>
            Learn React JS & Build Interactive Apps!
          </h3>
          <p
            className='font-regular text-neutral-800'
            style={{
              fontSize: generateClamp(14, 16, 1248),
              lineHeight: generateClamp(28, 30, 1248),
            }}
          >
            A powerful JavaScript library used for building fast, dynamic, and
            scalable user interfaces with a component-based architecture, making
            development more efficient and maintainable.
          </p>
        </div>
        <Link href='#module'>
          <Button
            className='w-full hover:scale-103 hover:font-bold md:w-56.75'
            withMotion
            stopMotionOnHover
            motionProps={{
              whileTap: {
                y: [0, -3, 3, -3, 0],
                transition: { duration: 0.3 },
              },
            }}
          >
            Get Access
          </Button>
        </Link>
      </div>
      <div className='w-full flex-[5.0]'>
        <div className='flex flex-col gap-4 max-md:hidden'>
          <Image
            src='/images/image-in-learn-react.png'
            alt='foto'
            width={568}
            height={310}
            sizes='100vw'
            className='shrink-0 max-md:hidden'
          />
          <div className='flex-center gap-4'>
            <div
              className='flex-center aspect-square rounded-2xl bg-[#043650]'
              style={{ height: generateClamp(50, 276, 1248) }}
            >
              <Image src={iconTechData[4].src} alt={iconTechData[4].alt} />
            </div>
            <div
              className='flex-center aspect-square rounded-2xl bg-[#2d4ed0]'
              style={{ height: generateClamp(100, 276, 1248) }}
            >
              <Image src={iconTechData[1].src} alt={iconTechData[4].alt} />
            </div>
          </div>
        </div>
        <Link
          href='#module'
          className='group relative h-auto w-full cursor-pointer md:hidden'
        >
          <Image
            src='/images/max-md-image-in-learn-react.png'
            alt='foto'
            width={0}
            height={0}
            sizes='100vw'
            className='h-auto w-full shrink-0 group-hover:scale-101'
          />
          <h3 className='text-xl-bold group-hover:text-primary-300 absolute bottom-[4.5%] left-[4.5%] pr-4 text-neutral-50 group-hover:scale-103 group-hover:font-extrabold'>
            Learn React JS & Build Interactive Apps!
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default LearnReact;
