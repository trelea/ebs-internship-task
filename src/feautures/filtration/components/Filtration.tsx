import { useGetCategories } from '../hooks/useGetCategories';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NumberField from './NumberField';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import { useSyncURI } from '../hooks/useSyncURI';
import Loading from '@/components/Loading';

export default function Filtration() {
  const [q] = useSearchParams();
  const { form, onSubmit } = useSyncURI();
  const { data, isError, error, isFetching, isPending, isLoading } =
    useGetCategories();

  if (isError || error) return;

  return (
    <Card className='w-96 h-fit shadow-xl'>
      <CardHeader>
        <CardTitle>Filtration</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
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
              {isFetching && isPending && isLoading ? (
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
                                              (value: string) =>
                                                value !== category
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
      </CardContent>
    </Card>
  );
}
