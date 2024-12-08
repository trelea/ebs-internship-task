import { useContext } from 'react';
import { CartContextElement } from '../context/CartContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash2, Wallet } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ProceedCheckout from './ProceedCheckout';

export default function PricesTable() {
  const { products, clearCart } = useContext(CartContextElement);
  return (
    <>
      {products.length !== 0 && (
        <Card className='h-full p-2 w-full '>
          <CardContent>
            <ScrollArea>
              <div className='max-h-[600px]'>
                <Table>
                  <TableHeader>
                    <TableRow className='w-full'>
                      <TableHead className='text-zinc-800 font-medium text-base lg:text-lg 2xl:text-xl'>
                        Product
                      </TableHead>
                      <TableHead className='text-zinc-800 font-medium text-base lg:text-lg 2xl:text-xl'>
                        Quantity
                      </TableHead>
                      <TableHead className='text-zinc-800 font-medium text-base lg:text-lg 2xl:text-xl'>
                        Total
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id} className='h-fit'>
                        <TableCell className='text-zinc-800/75 font-medium text-sm lg:text-base 2xl:text-lg h-fit py-2'>
                          {product.title.slice(0, 25)}...
                        </TableCell>
                        <TableCell className='text-zinc-800/75 font-medium text-sm lg:text-base 2xl:text-lg h-fit'>
                          {product.quantity}
                        </TableCell>
                        <TableCell className='text-zinc-800/75 font-medium text-sm lg:text-base 2xl:text-lg h-fit'>
                          ${Number(product.price * product.quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                  <TableFooter>
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        className='text-zinc-800 font-semibold text-base'
                      >
                        Total
                      </TableCell>
                      <TableCell className='text-zinc-800 font-semibold text-base'>
                        $
                        {products
                          .reduce(
                            (a, b: { price: number; quantity: number }) => {
                              return a + b.price * b.quantity;
                            },
                            0
                          )
                          .toFixed(2)}
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className='flex justify-between items-center h-full'>
            <Button
              variant='outline'
              onClick={() => clearCart()}
              className='shadow-2xl'
            >
              Clear Cart
              <Trash2 />
            </Button>
            {/* {products.length > 10 && (
              <p className='text-base font-medium bg-primary text-secondary p-1 px-4 rounded-md shadow-2x h-fulll'>
                Scroll.
              </p>
            )} */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className='shadow-2xl'>
                  CheckOut <Wallet />
                </Button>
              </DialogTrigger>
              <ProceedCheckout />
            </Dialog>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
