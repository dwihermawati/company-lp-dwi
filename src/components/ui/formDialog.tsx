import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useAnimation } from 'motion/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type FormDialogProps = {
  onClose: () => void;
};

const FormDialog: React.FC<FormDialogProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const contactSchema = z.object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .min(2, { message: 'Name must be at least 2 characters' })
      .max(50, { message: 'Name must be at most 50 characters' }),

    email: z.email({ message: 'Please enter a valid email address' }),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const controls = useAnimation();
  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 },
  };

  async function onSubmit() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      toast.info('This form is only a demo and will not be processed.');
      form.reset();
      onClose();
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <motion.form
        className='space-y-5'
        onSubmit={form.handleSubmit(onSubmit, () => {
          controls.start(shakeAnimation);
        })}
        animate={controls}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field, fieldState }) => (
            <FormItem>
              <Label>Name</Label>
              <Input
                disabled={loading}
                placeholder='Enter your name'
                {...field}
                aria-invalid={!!fieldState.error}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field, fieldState }) => (
            <FormItem>
              <Label>Email</Label>
              <Input
                disabled={loading}
                placeholder='Enter your email'
                {...field}
                aria-invalid={!!fieldState.error}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} className='w-full'>
          {loading ? <BeatLoader size={8} color='#fff' /> : 'Send'}
        </Button>
      </motion.form>
    </Form>
  );
};

export default FormDialog;
