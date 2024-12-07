import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  categories: z.array(z.string()).optional(),
  count_from: z.coerce.number().optional(),
  count_to: z.coerce.number().optional(),
  price_from: z.coerce.number().optional(),
  price_to: z.coerce.number().optional(),
  rate_from: z.coerce.number().optional(),
  rate_to: z.coerce.number().optional(),
});

export const useSyncURI = () => {
  const [_, setQueries] = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: _.getAll('categories') || [],
      count_from: parseFloat(_.get('count_from') as string) || undefined,
      count_to: parseFloat(_.get('count_to') as string) || undefined,
      price_from: parseFloat(_.get('price_from') as string) || undefined,
      price_to: parseFloat(_.get('price_to') as string) || undefined,
      rate_from: parseFloat(_.get('rate_from') as string) || undefined,
      rate_to: parseFloat(_.get('rate_to') as string) || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    let q = {};

    Object.entries(values).map(([key, value]) => {
      if (value) return (q = { ...q, [key]: value });
      if (Array.isArray(value) && value.length !== 0)
        return (q = { ...q, [key]: value });
    });

    setQueries(q);
  };

  return { form, onSubmit };
};
