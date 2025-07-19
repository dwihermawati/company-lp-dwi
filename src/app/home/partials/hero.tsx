import IconPosition from '@/components/hero/IconPosition';
import { Button } from '@/components/ui/button';
import { generateClamp } from '@/function/generate-clamp';
import { Icon } from '@iconify/react';
import React from 'react';

const Hero = () => {
  return (
    <section
      className='relative w-full bg-black'
      id='home'
      style={{ height: generateClamp(852, 1024, 1440) }}
    >
      <div
        className='mx-auto h-full max-w-360 border border-blue-500'
        style={{
          paddingTop: generateClamp(205, 300, 1440),
          paddingBottom: generateClamp(239, 354, 1440),
        }}
      >
        {/* <div className='mx-auto h-fit max-w-[906px] border border-amber-500'> */}
        <div
          style={{
            gap: generateClamp(16, 40, 1440),
          }}
          className='flex-center relative mx-auto h-fit max-w-[906px] flex-col border border-amber-500 max-lg:mx-5'
        >
          <IconPosition />
          <div className='flex-center flex-col gap-4'>
            <div className='rounded-full bg-gradient-to-r from-[#0093DD]/0 to-[#0093DD]/100 p-[1px]'>
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
          <Button className='w-full sm:w-60'>Join Now</Button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
