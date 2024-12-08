import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FormFiltration from './FormFiltration';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import { useSyncURI } from '../hooks/useSyncURI';
import ErrorDialog from '@/components/ErrorDialog';
import { useGetCategories } from '../hooks/useGetCategories';
import React from 'react';

export default function Filtration() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [q] = useSearchParams();
  const { form, onSubmit } = useSyncURI();
  const { data, isError, error, isFetching, isPending, isLoading } =
    useGetCategories();

  if (isError || error) return <ErrorDialog />;

  return (
    <>
      <Card className='hidden lg:block w-96 h-fit shadow-xl'>
        <CardHeader>
          <CardTitle>Filtration</CardTitle>
        </CardHeader>
        <CardContent>
          <FormFiltration
            data={data}
            form={form}
            onSubmit={onSubmit}
            q={q}
            loading={isFetching || isPending || isLoading}
          />
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className='lg:hidden'>
          <Button>Filter</Button>
        </DialogTrigger>
        <DialogContent className='w-[80%] rounded-lg'>
          <DialogHeader>
            <DialogTitle>Filtration</DialogTitle>
          </DialogHeader>
          <FormFiltration
            data={data}
            form={form}
            onSubmit={onSubmit}
            q={q}
            loading={isFetching || isPending || isLoading}
            afterSubmit={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
