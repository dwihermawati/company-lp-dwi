import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';
import { testimonialsData } from '@/constants/testimony-data';
import { generateClamp } from '@/function/generate-clamp';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Testimony = () => {
  return (
    <div
      className='w-full bg-neutral-50'
      style={{ paddingBottom: generateClamp(40, 80, 1248) }}
    >
      <Section
        title='What Our Students Say'
        subtitle='Real stories from real learners who turned their goals into careers'
        style={{ paddingBottom: 0, marginBottom: generateClamp(24, 48, 1248) }}
        id='testimony'
      />
      <Carousel className='max-md:mx-5'>
        <CarouselContent>
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCard
                key={index}
                rating={testimonial.rating}
                description={testimonial.description}
                profileSrc={testimonial.profileSrc}
                profileName={testimonial.profileName}
                profileOccupation={testimonial.profileOccupation}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </div>
  );
};

export default Testimony;

type TestimonialCardProps = {
  rating: number;
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  description,
  profileSrc,
  profileName,
  profileOccupation,
}) => {
  return (
    <div
      className='rounded-2xl border border-neutral-200 bg-white'
      style={{ padding: generateClamp(16, 24, 1248) }}
    >
      <p
        className='mb-8 h-37.5 font-medium text-neutral-950 sm:h-28.75'
        style={{
          fontSize: generateClamp(16, 18, 1248),
          lineHeight: generateClamp(30, 32, 1248),
        }}
      >
        {description}
      </p>

      <div className='flex flex-col gap-4'>
        {/* stars */}
        <div className='flex'>
          {new Array(rating).fill(null).map((_, index) => (
            <Icon
              key={index}
              icon='line-md:star-filled'
              className='size-8 text-[#F3993F]'
            />
          ))}
        </div>
        {/* profile */}
        <div className='flex-start gap-4'>
          <Image
            src={profileSrc}
            alt={profileName}
            className='size-12 rounded-full'
          />
          <div>
            <p
              className='font-semibold text-neutral-950'
              style={{
                fontSize: generateClamp(16, 18, 1248),
                lineHeight: generateClamp(30, 32, 1248),
              }}
            >
              {profileName}
            </p>
            <p
              className='font-regular text-neutral-600'
              style={{
                fontSize: generateClamp(14, 16, 1248),
                lineHeight: generateClamp(28, 30, 1248),
              }}
            >
              {profileOccupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
