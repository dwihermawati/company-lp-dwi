import React from 'react';

import { generateClamp } from '@/function/generate-clamp';

const IconPosition = () => {
  return (
    <>
      <div
        className='animate-wiggle pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-1.png")] bg-contain bg-no-repeat'
        style={{
          top: generateClamp(105, 191, 1440),
          right: generateClamp(299, 1081, 1440),
          width: generateClamp(40, 80, 1440),
        }}
      />
      <div
        className='animate-wiggle pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-2.png")] bg-contain bg-no-repeat'
        style={{
          top: generateClamp(430, 470, 1440),
          right: generateClamp(630, 1210, 1440),
          width: generateClamp(43, 83, 1440),
        }}
      />
      <div
        className='animate-wiggle pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-3.png")] bg-contain bg-no-repeat'
        style={{
          bottom: generateClamp(112, 220, 1440),
          right: generateClamp(281, 1046, 1440),
          width: generateClamp(55, 100, 1440),
        }}
      />
      <div
        className='animate-wiggle pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-4.png")] bg-contain bg-no-repeat'
        style={{
          bottom: generateClamp(61, 244, 1440),
          left: generateClamp(294, 927, 1440),
          width: generateClamp(47, 79, 1440),
        }}
      />
      <div
        className='animate-wiggle pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-5.png")] bg-contain bg-no-repeat'
        style={{
          bottom: generateClamp(127, 381, 1440),
          right: generateClamp(139, 194, 1440),
          width: generateClamp(63, 82, 1440),
        }}
      />

      <div
        className='animate-wiggle pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-6.png")] bg-contain bg-no-repeat'
        style={{
          top: generateClamp(105, 203, 1440),
          left: generateClamp(292, 1134, 1440),
          width: generateClamp(52, 74, 1440),
        }}
      />
    </>
  );
};

export default IconPosition;
