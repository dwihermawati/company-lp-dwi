import { socialMediaData } from '@/constants/social-media-data';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full border-t border-t-neutral-800 bg-black py-6'>
      <div className='custom-container flex-between gap-6 max-md:flex-col'>
        <div className='flex gap-4'>
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
  );
};

export default Footer;
