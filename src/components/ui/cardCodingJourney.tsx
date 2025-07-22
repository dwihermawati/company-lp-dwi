import { generateClamp } from '@/function/generate-clamp';
import { cn } from '@/lib/utils';
import React from 'react';

type CardCodingJourneyProps = {
  title: string;
  desc: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const CardCodingJourney: React.FC<CardCodingJourneyProps> = ({
  title,
  desc,
  children,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white px-4 pt-4 hover:scale-101 md:rounded-3xl md:px-5 md:pt-5',
        className
      )}
      style={{ ...style, boxShadow: '0px 0px 24px rgba(226, 226, 226, 0.2)' }}
    >
      <div>
        <h3
          className='font-bold text-neutral-950'
          style={{
            fontSize: generateClamp(18, 20, 1248),
            lineHeight: generateClamp(32, 34, 1248),
          }}
        >
          {title}
        </h3>
        <p className='text-sm-regular mt-2 text-neutral-950'>{desc}</p>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default CardCodingJourney;
