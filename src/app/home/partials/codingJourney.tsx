'use client';

import { Section } from '@/components/layouts/section';
import CardCodingJourney from '@/components/ui/cardCodingJourney';
import { generateClamp } from '@/function/generate-clamp';
import React, { useState } from 'react';
import Image from 'next/image';
import { masterCodingIconData } from '@/constants/master-coding';
import { Icon } from '@iconify/react';
import { generateClampInverse } from '@/function/generate-clamp-inverse';
import { provenResultData } from '@/constants/proven-result';
import { iconTechData } from '@/constants/icon-tech-stack';
import { Button } from '@/components/ui/button';
import { CountUp } from '@/components/ui/countUp';
import Link from 'next/link';
import DialogOpen from '@/components/ui/dialogOpen';

const CodingJourney = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };
  return (
    <>
      <Section
        title='Your Coding Journey, Simplified'
        subtitle='Everything you need to become a job-ready developer expert guidance, hands-on projects, and real career results'
      >
        <div className='flex flex-col gap-4'>
          <div className='flex flex-wrap gap-4'>
            <CardCodingJourney
              title='Master Coding, Land Your Dream Job!'
              desc='Learn job-ready skills with real-world projects and expert mentorship'
              className='flex-[5.0] basis-90 overflow-hidden'
              style={{ height: generateClamp(349, 384, 1248) }}
            >
              <div
                style={{
                  height: generateClamp(229, 420, 1248),
                  marginTop: generateClamp(37, 40, 1248),
                  backgroundImage:
                    'url(/images/ellipse-master-coding-decoration.svg)',
                }}
                className='relative mx-auto aspect-square bg-cover'
              >
                <Image
                  src={masterCodingIconData[1].src}
                  alt={masterCodingIconData[1].alt}
                  className='animate-wiggle absolute left-[-5.8%] aspect-square'
                  style={{
                    width: generateClamp(33, 59.9, 1248),
                    top: generateClamp(86.4, 157.4, 1248),
                  }}
                />
                <Image
                  src={masterCodingIconData[2].src}
                  alt={masterCodingIconData[2].alt}
                  className='animate-wiggle absolute top-[-1.7%] aspect-square'
                  style={{
                    width: generateClamp(33, 59.9, 1248),
                    left: generateClamp(42.6, 78, 1248),
                  }}
                />
                <Image
                  src={masterCodingIconData[3].src}
                  alt={masterCodingIconData[3].alt}
                  className='animate-wiggle absolute top-[21.24%] aspect-square'
                  style={{
                    width: generateClamp(33, 59.9, 1248),
                    left: generateClamp(130, 238, 1248),
                  }}
                />
                <Image
                  src={masterCodingIconData[4].src}
                  alt={masterCodingIconData[4].alt}
                  className='animate-wiggle absolute top-[12.65%] aspect-square'
                  style={{
                    width: generateClamp(33, 59.9, 1248),
                    left: generateClamp(193, 353, 1248),
                  }}
                />
                <div
                  className='flex-center animate-wiggle-y absolute top-[21.72%] left-[8.81%] w-fit rounded-full bg-white'
                  style={{
                    height: generateClamp(24, 32, 1248),
                    paddingInline: generateClamp(6, 12, 1248),
                    boxShadow: '0px 0px 24px rgba(165, 165, 165, 0.2)',
                    gap: generateClamp(3, 6, 1248),
                  }}
                >
                  <Icon
                    icon='material-symbols:verified-rounded'
                    style={{
                      height: generateClamp(10, 20, 1248),
                      width: 'auto',
                    }}
                    className='text-primary-300'
                  />
                  <span
                    className='font-regular leading-6 text-neutral-950'
                    style={{ fontSize: generateClamp(8, 12, 1248) }}
                  >
                    Expert Frontend
                  </span>
                </div>
                <div
                  className='flex-center animate-wiggle-y absolute top-[44.2%] left-[76%] w-fit rounded-full bg-white whitespace-nowrap'
                  style={{
                    height: generateClamp(24, 32, 1248),
                    paddingInline: generateClamp(6, 12, 1248),
                    boxShadow: '0px 0px 24px rgba(165, 165, 165, 0.2)',
                    gap: generateClamp(3, 6, 1248),
                  }}
                >
                  <Icon
                    icon='material-symbols:verified-rounded'
                    style={{
                      height: generateClamp(10, 20, 1248),
                      width: 'auto',
                    }}
                    className='text-primary-300'
                  />
                  <span
                    className='font-regular leading-6 text-neutral-950'
                    style={{ fontSize: generateClamp(8, 12, 1248) }}
                  >
                    High Performance
                  </span>
                </div>
                <div
                  className='bg-neutral-25 flex-center animate-breathe absolute left-1/2 aspect-square -translate-x-1/2 rounded-full'
                  style={{
                    width: generateClamp(52.5, 96, 1248),
                    boxShadow: '0px 0px 24px rgba(165, 165, 165, 0.2)',
                    top: generateClamp(88.5, 162, 1248),
                  }}
                >
                  <Image
                    src={masterCodingIconData[0].src}
                    alt={masterCodingIconData[0].alt}
                    className='h-auto'
                    style={{
                      width: generateClamp(20.22, 37, 1248),
                    }}
                  />
                </div>
              </div>
            </CardCodingJourney>
            <CardCodingJourney
              title='Proven Results, Real Impact'
              desc='Turn skills into careers with top-tier training & expert guidance'
              className='relative flex flex-[5.0] basis-90 flex-col overflow-hidden'
              style={{
                height: generateClamp(360, 384, 1248),
                gap: generateClamp(16, 24, 1248),
              }}
            >
              <div
                className='absolute top-[59.4%] aspect-square animate-pulse bg-[url("/images/globe-decoration-proven-results.png")] bg-contain bg-no-repeat'
                style={{
                  width: generateClamp(132, 261, 1248),
                  top: generateClampInverse(251, 228, 1248),
                  right: generateClamp(-33, -54, 1248),
                }}
              />
              <div
                style={{
                  rowGap: generateClamp(16, 24, 1248),
                  columnGap: 37,
                }}
                className='relative z-10 grid w-full grid-cols-2'
              >
                {provenResultData.map((item, index) => (
                  <div key={index}>
                    <h3
                      className='font-bold text-neutral-950'
                      style={{
                        fontSize: generateClamp(20, 28, 1248),
                        lineHeight: generateClamp(34, 38, 1248),
                      }}
                    >
                      {item.to > 0 ? (
                        <CountUp
                          to={item.to}
                          suffix={item.suffix}
                          className='inline-block'
                        />
                      ) : (
                        item.suffix
                      )}
                    </h3>
                    <p className='text-sm-regular text-neutral-950'>
                      {item.title}
                    </p>
                  </div>
                ))}
                <Link
                  href='#testimony'
                  className='w-fit transition-all duration-300 hover:brightness-115'
                >
                  <Image
                    src='/images/fotos-proven-results.png'
                    alt='foto'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{
                      height: generateClamp(32, 44, 1248),
                      width: 'auto',
                    }}
                  />
                </Link>
              </div>
            </CardCodingJourney>
          </div>
          <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <CardCodingJourney
              title='Choose Your Path, Build Your Future'
              desc='Master frontend development with cutting-edge skills and best practices.'
            >
              <div
                style={{
                  marginTop: generateClamp(20, 36, 1248),
                  marginBottom: generateClamp(16, 46, 1248),
                  gap: generateClamp(6, 8, 1248),
                }}
                className='grid w-full grid-cols-3'
              >
                {iconTechData.map((icon, index) => (
                  <Link
                    href='#module'
                    key={index}
                    style={{
                      height: generateClamp(66.16, 79.19, 1248),
                      borderRadius: generateClamp(13.3, 15.92, 1248),
                    }}
                    className='flex-center w-auto bg-neutral-50 transition-all duration-300 hover:scale-105 hover:bg-neutral-200'
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      className='h-auto w-10'
                    />
                  </Link>
                ))}
              </div>
            </CardCodingJourney>
            <CardCodingJourney
              title='Everything You Need to Succeed'
              desc='Live classes, mentorship, hands-on projects, and career support'
            >
              <div
                className='mx-auto mt-15.5 w-full md:mt-10'
                style={{
                  height: generateClamp(216, 243, 1248),
                }}
              >
                <div
                  className='flex-center group relative size-full cursor-pointer overflow-hidden rounded-t-3xl bg-[url("/images/thumbnail-collaborative-workspace.png")] bg-contain bg-center bg-no-repeat md:rounded-t-2xl'
                  onClick={handleClick}
                >
                  <div
                    className='flex-center bg-[rgba(71, 71, 71, 0.4)] absolute top-1/2 left-1/2 z-10 aspect-square -translate-x-1/2 -translate-y-1/2 transform rounded-full backdrop-blur-md group-hover:opacity-90'
                    style={{ width: generateClamp(32, 48, 1248) }}
                  >
                    <Icon
                      icon='solar:play-bold'
                      className='text-neutral-25 h-auto group-hover:opacity-50'
                      style={{ width: generateClamp(12, 16, 1248) }}
                    />
                  </div>
                  {isVideoPlaying && (
                    <div className='absolute top-0 left-0 z-20 size-full'>
                      <iframe
                        width='100%'
                        height='100%'
                        src='https://www.youtube.com/embed/NmFXVPJ2Dhk?si=UbkposzI30IFrUOp'
                        title='Youtube Video'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='size-full'
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </CardCodingJourney>
            <div
              className='bg-primary-300 flex flex-col justify-between gap-6 hover:scale-101 md:col-span-2 lg:col-span-1'
              style={{
                padding: generateClamp(16, 20, 1248),
                boxShadow: '0px 0px 24px rgba(226, 226, 226, 0.2)',
                borderRadius: generateClamp(16, 20, 1248),
              }}
            >
              <div className='flex flex-col gap-6'>
                <div className='flex-center size-12 rounded-full bg-white'>
                  <Icon
                    icon='pepicons-pop:code'
                    className='text-primary-300 h-auto w-6'
                  />
                </div>
                <div>
                  <h3
                    className='mb-2 font-bold text-white'
                    style={{
                      fontSize: generateClamp(24, 32, 1248),
                      lineHeight: generateClamp(36, 40, 1248),
                    }}
                  >
                    Your Future Starts Here
                  </h3>
                  <p
                    className='md:text-neutral-25 font-regular text-white'
                    style={{
                      fontSize: generateClamp(14, 16, 1248),
                      lineHeight: generateClamp(28, 30, 1248),
                    }}
                  >
                    Enroll today and become a Frontend Developers in just months
                  </p>
                </div>
              </div>
              <Button
                withMotion
                stopMotionOnHover
                className='hover:text-primary-300 w-full bg-white text-neutral-950 hover:scale-103 hover:font-bold'
                onClick={() => setIsDialogOpen(true)}
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
        <DialogOpen open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </Section>
    </>
  );
};

export default CodingJourney;
