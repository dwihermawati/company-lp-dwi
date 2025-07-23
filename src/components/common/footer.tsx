import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';
import { generateClamp } from '@/function/generate-clamp';

const Footer = () => {
  return (
    <div className='w-full border-t border-t-neutral-800 bg-black py-6'>
      <div className='custom-container flex-between gap-6 max-lg:flex-col'>
        <div className='flex flex-[3.0] gap-4'>
          {socialMediaData.map((data) => (
            <Link
              key={data.alt}
              href={data.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-center size-10 rounded-full border border-neutral-800 bg-black transition-transform hover:scale-110 md:size-12'
            >
              {data.socialIcon}
            </Link>
          ))}
        </div>
        <div className='flex-between flex-[7.0] gap-3 max-lg:flex-col-reverse'>
          <p
            className='font-regular text-neutral-600'
            style={{
              fontSize: generateClamp(12, 16, 1248),
              lineHeight: generateClamp(24, 30, 1248),
            }}
          >
            Copyright by{' '}
            <a
              href='https://dwi-hermawati.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary-300 underline underline-offset-3 hover:brightness-130'
              title='dwi-hermawati.vercel.app'
            >
              Dwi Hermawati
            </a>{' '}
            © 2025
          </p>
          <div className='flex-center gap-4 px-4'>
            <span className='md:text-md-regular text-sm-regular text-neutral-400'>
              Terms & Conditions
            </span>
            <div className='size-1 rounded-full bg-[#D9D9D9]' />
            <span className='md:text-md-regular text-sm-regular text-neutral-400'>
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
