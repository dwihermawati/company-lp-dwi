'use client';

import { Button } from '@/components/ui/button';
import DialogOpen from '@/components/ui/dialogOpen';
import { generateClamp } from '@/function/generate-clamp';
import React, { useState } from 'react';

const CTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className='relative w-full overflow-hidden bg-black'>
      <div className='absolute z-10 size-full bg-[url("/images/cta-decoration-bg.png")] bg-cover bg-center opacity-50' />
      <div
        className='custom-container flex-center relative z-20 flex-col gap-7.5'
        style={{ paddingBlock: generateClamp(40, 100, 1248) }}
      >
        <div>
          <h2
            className='text-neutral-25 text-center font-extrabold'
            style={{
              fontSize: generateClamp(24, 36, 1248),
              lineHeight: generateClamp(36, 44, 1248),
            }}
          >
            Your Future Starts Here!
          </h2>
          <p className='text-lg-regular mt-4 text-center text-neutral-300'>
            Enroll today and become a Frontend Developers in just months
          </p>
        </div>
        <Button
          className='w-full hover:scale-103 hover:font-bold sm:w-60'
          withMotion
          stopMotionOnHover
          motionProps={{
            whileTap: {
              y: [0, -3, 3, -3, 0],
              transition: { duration: 0.3 },
            },
          }}
          onClick={() => setIsDialogOpen(true)}
        >
          Join Now
        </Button>
      </div>
      <DialogOpen open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default CTA;
