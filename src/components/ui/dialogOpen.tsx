import React, { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { XIcon } from 'lucide-react';
import FormDialog from './formDialog';

type DialogOpenProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DialogOpen: React.FC<DialogOpenProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-112.75'>
        <DialogHeader>
          <DialogTitle>Join Form</DialogTitle>
          <DialogClose>
            <XIcon className='size-6 cursor-pointer text-neutral-950 hover:text-neutral-500' />
          </DialogClose>
        </DialogHeader>
        <FormDialog onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogOpen;
