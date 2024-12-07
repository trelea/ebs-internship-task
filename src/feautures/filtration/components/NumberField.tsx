import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

interface Props {
  fieldName: string;
  form: UseFormReturn<any>;
}

export default function NumberField({ fieldName, form }: Props) {
  return (
    <div className='flex gap-6 border-t relative pt-4'>
      <h1 className='absolute -top-[15px] bg-card font-semibold pr-4 text-base'>
        {fieldName}
      </h1>
      <FormField
        control={form.control}
        name={`${fieldName.toLowerCase()}_from`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='font-semibold'>From</FormLabel>
            <FormControl>
              <Input type='number' placeholder='0' {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${fieldName.toLowerCase()}_to`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='font-semibold'>To</FormLabel>
            <FormControl>
              <Input type='number' placeholder='9999' {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
