'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'framer-motion'; // <- pastikan pakai ini
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary-300 text-sm-semibold text-neutral-25 rounded-full hover:shadow-blue-glow text-center',
        outline:
          'border-primary-300 border rounded-full hover:scale-105 disabled:border-neutral-300',
      },
      size: {
        default: 'h-11 p-2',
        icon: 'md:p-2 p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
  withMotion?: boolean;
  stopMotionOnHover?: boolean;
  motionProps?: HTMLMotionProps<'button'>;
} & Omit<
    React.ComponentPropsWithoutRef<'button'>,
    'ref' | 'as' | 'onAnimationStart' | 'onAnimationEnd'
  >;

const defaultMotionProps: HTMLMotionProps<'button'> = {
  animate: {
    translateY: [0, -5, 5, -5, 0],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

function Button({
  className,
  variant,
  size,
  asChild = false,
  withMotion = false,
  stopMotionOnHover = false,
  motionProps,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  const [isHovering, setIsHovering] = React.useState(false);

  if (withMotion) {
    const finalMotionProps: HTMLMotionProps<'button'> = {
      ...defaultMotionProps,
      ...motionProps,
      animate:
        stopMotionOnHover && isHovering
          ? { scale: 1 }
          : (motionProps?.animate ?? defaultMotionProps.animate),
      onHoverStart: () => {
        if (stopMotionOnHover) setIsHovering(true);
      },
      onHoverEnd: () => {
        if (stopMotionOnHover) setIsHovering(false);
      },
    };

    if (asChild) {
      const MotionSlot = motion(Slot);
      return (
        <MotionSlot
          data-slot='button'
          className={classes}
          {...finalMotionProps}
          {...(props as any)}
        />
      );
    }

    return (
      <motion.button
        data-slot='button'
        className={classes}
        {...finalMotionProps}
        {...(props as any)}
      />
    );
  }

  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot='button' className={classes} {...props} />;
}

export { Button, buttonVariants };
