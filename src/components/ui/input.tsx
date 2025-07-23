import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular h-12 w-full rounded-xl border border-neutral-300 px-4 py-2 text-neutral-950 outline-none placeholder:text-neutral-500',
        'focus:border-primary-300 focus:border-[1px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
