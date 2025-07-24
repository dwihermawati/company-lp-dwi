'use client';

import { Icon } from '@iconify/react';
import React, { useState } from 'react';

import DecorationBg from '@/components/hero/DecorationBg';
import IconPosition from '@/components/hero/IconPosition';
import { Button } from '@/components/ui/button';
import DialogOpen from '@/components/ui/dialogOpen';

import { generateClamp } from '@/function/generate-clamp';

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      className='relative w-full overflow-hidden bg-black'
      id='home'
      style={{ height: generateClamp(852, 1024, 1440) }}
    >
      <DecorationBg />
      <div
        className='relative mx-auto h-full max-w-360 overflow-hidden'
        style={{
          paddingTop: generateClamp(205, 300, 1440),
          paddingBottom: generateClamp(239, 354, 1440),
        }}
      >
        <IconPosition />
        <div className='animate-twinkle pointer-events-none absolute top-[5.2%] left-[3.6%] z-0 h-[835px] w-[1323px] bg-[url("/images/dot-hero-decoration.svg")] bg-contain bg-repeat-x' />
        <div
          style={{
            gap: generateClamp(16, 40, 1440),
          }}
          className='flex-center relative z-30 mx-auto h-fit max-w-[906px] flex-col max-lg:mx-5'
        >
          <div className='flex-center flex-col gap-4'>
            <div className='animate-breathe rounded-full bg-gradient-to-r from-[#0093DD]/0 to-[#0093DD]/100 p-[1px]'>
              <div className='flex-center h-8 w-fit gap-1.5 rounded-full bg-black px-4 py-1'>
                <Icon icon='solar:cup-bold' className='size-4 text-[#F3B64C]' />
                <span className='text-neutral-25 text-xs-medium md:text-sm-medium'>
                  Top Bootcamp International
                </span>
              </div>
            </div>
            <h1
              className='text-neutral-25 max-w-[906px] text-center font-extrabold'
              style={{
                fontSize: generateClamp(39, 60, 1440),
                lineHeight: generateClamp(48, 72, 1440),
              }}
            >
              Become a{' '}
              <span className='text-primary-300'>
                Expert Frontend Developer
              </span>{' '}
              Who Gets Hired!
            </h1>
            <p
              className='text-neutral-25 font-regular text-center'
              style={{
                fontSize: generateClamp(15, 18, 1440),
                lineHeight: generateClamp(30, 32, 1440),
              }}
            >
              Learn real skills. Build real projects. Get real results with
              expert mentorship.
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
      </div>
      <DialogOpen open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default Hero;
