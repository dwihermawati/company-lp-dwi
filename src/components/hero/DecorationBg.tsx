import Image from 'next/image';
import React from 'react';

import { generateClamp } from '@/function/generate-clamp';

const DecorationBg = () => {
  return (
    <>
      <Image
        src='/images/curve-hero-decoration.svg'
        alt=''
        width={0}
        height={0}
        className='pointer-events-none absolute left-0 z-20 w-full object-cover object-top max-md:object-center'
        style={{
          height: generateClamp(108, 398, 1440),
          top: generateClamp(811, 873, 1440),
        }}
        priority
      />
      <Image
        src='/images/texture-hero-decoration.svg'
        alt=''
        width={1440}
        height={1024}
        className='pointer-events-none absolute top-0 left-1/2 z-5 h-[1024px] w-full -translate-x-1/2 object-cover mix-blend-color-burn'
      />
      <Image
        src='/images/bg-vector-hero-decoration.svg'
        alt=''
        width={1440}
        height={1710}
        style={{
          height: generateClamp(1422, 1710, 1440),
        }}
        className='pointer-events-none absolute top-[27%] left-1/2 z-0 w-full -translate-x-1/2 object-cover'
      />
    </>
  );
};

export default DecorationBg;
