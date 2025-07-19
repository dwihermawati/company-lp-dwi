import { generateClamp } from '@/function/generate-clamp';
import { generateClampInverse } from '@/function/generate-clamp-inverse';
import React from 'react';

const IconPosition = () => {
  return (
    <>
      <div
        className='pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-1.png")] bg-contain bg-no-repeat'
        style={{
          top: generateClamp(-90, -109, 1440),
          left: generateClampInverse(24, 12, 1440),
          width: generateClamp(40, 80, 1440),
        }}
      />
      <div
        className='pointer-events-none absolute top-[52.5%] -left-[10.2%] z-10 aspect-square bg-[url("/icons/icon-decoration-2.png")] bg-contain bg-no-repeat max-md:hidden'
        style={{
          width: generateClamp(43, 83, 1440),
        }}
      />
      <div
        className='pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-3.png")] bg-contain bg-no-repeat'
        style={{
          top: generateClampInverse(490, 404, 1440),
          left: generateClampInverse(27.5, 27, 1440),
          width: generateClamp(55, 100, 1440),
        }}
      />
      <div
        className='pointer-events-none absolute z-10 aspect-square bg-[url("/icons/icon-decoration-4.png")] bg-contain bg-no-repeat'
        style={{
          top: generateClampInverse(551, 401, 1440),
          right: generateClamp(22, 167, 1440),
          width: generateClamp(47, 79, 1440),
        }}
      />
      <div
        className='pointer-events-none absolute top-[261px] right-[-19px] z-10 aspect-square bg-[url("/icons/icon-decoration-5.png")] bg-contain bg-no-repeat'
        style={{
          // top: generateClampInverse(468, 261, 1440),
          // right: generateClampInverse(119, -20, 1440),
          width: generateClamp(63, 82, 1440),
        }}
      />
    </>
  );
};

export default IconPosition;
