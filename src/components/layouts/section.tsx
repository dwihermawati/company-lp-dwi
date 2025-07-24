import React from 'react';

import { generateClamp } from '@/function/generate-clamp';
import { cn } from '@/lib/utils';

type SectionProps = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
  style,
}) => {
  return (
    <div
      id={id}
      className={cn('custom-container', className)}
      style={{
        paddingTop: generateClamp(40, 80, 1248),
        paddingBottom: generateClamp(40, 80, 1248),
        ...style,
      }}
    >
      <div className='text-center'>
        <h2
          className='font-extrabold text-neutral-950'
          style={{
            fontSize: generateClamp(24, 36, 1248),
            lineHeight: generateClamp(36, 44, 1248),
          }}
        >
          {title}
        </h2>
        <p
          className='font-regular mt-4 text-neutral-800'
          style={{
            fontSize: generateClamp(14, 16, 1248),
            lineHeight: generateClamp(28, 30, 1248),
          }}
        >
          {subtitle}
        </p>
      </div>
      <div style={{ marginTop: generateClamp(24, 48, 1248) }}>{children}</div>
    </div>
  );
};
