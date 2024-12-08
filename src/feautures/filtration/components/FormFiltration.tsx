import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import NumberField from './NumberField';
import Loading from '@/components/Loading';
import { Checkbox } from '@/components/ui/checkbox';
import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';

interface Props {
  form: UseFormReturn<any>;
  onSubmit: (_: any, __?: () => void) => void;
  q: URLSearchParams;
  loading: boolean;
  data?: string[];
  afterSubmit?: () => void;
}

export default function FormFiltration({
  form,
  onSubmit,
  q,
  loading,
  data,
  afterSubmit,
}: Props) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((e) => onSubmit(e, afterSubmit))}
        className='space-y-10'
      >
        {/* PRICE */}
        <NumberField fieldName='Price' form={form} />
        {/* RATE */}
        <NumberField fieldName='Rate' form={form} />
        {/* COUNT */}
        <NumberField fieldName='Count' form={form} />
        {/* CATEGORIES */}

        <div className='flex gap-6 border-t relative pt-6'>
          <h1 className='absolute -top-[15px] bg-card font-semibold pr-4 text-base'>
            Categories
          </h1>
          {loading ? (
            <Loading />
          ) : (
            <FormField
              control={form.control}
              name='categories'
              render={() => (
                <FormItem>
                  {data?.map((category: string) => (
                    <FormField
                      key={category}
                      control={form.control}
                      name='categories'
                      render={({ field }) => {
                        return (
                          <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                            <FormControl>
                              <Checkbox
                                defaultChecked={q
                                  .getAll('categories')
                                  .includes(category)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value as string[]),
                                        category,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: string) => value !== category
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel>{category}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
          )}
        </div>

        <Button className='w-full' type='submit'>
          Filter
        </Button>
      </form>
    </Form>
  );
}
