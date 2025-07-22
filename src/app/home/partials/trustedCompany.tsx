import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { Marquee } from '@/components/ui/marquee';
import { trustedCompaniesData } from '@/constants/trusted-companies-data';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';
import { chunk } from '@/lib/chunk';
import { generateClamp } from '@/function/generate-clamp';

const TrustedCompany = () => {
  return (
    <Section
      title='Trusted by 1,000+ Hiring Partners Worldwide'
      subtitle='From global tech companies to fast-growing startups.'
      id='why-choose-us'
      className='max-sm:px-4'
    >
      <CompaniesMarquee />
      <CompaniesSlider />
    </Section>
  );
};

export default TrustedCompany;

const CompaniesMarquee = () => {
  return (
    <div className='relative hidden h-12 items-center sm:flex'>
      <div className='w-full overflow-hidden'>
        <Marquee>
          {trustedCompaniesData.map((data) => (
            <Image
              key={data.alt}
              src={data.src}
              alt={data.alt}
              className='h-12 w-auto object-contain select-none'
              style={{ height: generateClamp(32, 48, 1248) }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const CompaniesSlider = () => {
  const chunkMobile = chunk(trustedCompaniesData, 3);
  return (
    <Carousel className='w-full sm:hidden'>
      <CarouselContent>
        {chunkMobile.map((group, i) => (
          <CarouselItem
            itemsPerSlideClass='basis-full'
            key={i}
            className='flex-between'
          >
            {group.map((item) => (
              <Image
                key={item.alt}
                src={item.src}
                alt={item.alt}
                className='h-8 w-auto object-contain'
              />
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
};
