import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PhoneInput } from '@/components/ui/phone-input';

export default function ProceedCheckout() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Proceed Checkout</DialogTitle>
        <DialogDescription>
          Please double-check your information to ensure all details, including
          your billing address, payment method, and contact information, are
          correct and valid before proceeding with the checkout process.
        </DialogDescription>
      </DialogHeader>
      <div className='grid gap-4 py-4'>
        <div className='space-y-1'>
          <Label htmlFor='name' className='text-right'>
            Name
          </Label>
          <Input id='name' className='col-span-3' placeholder='Name...' />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='username' className='text-right'>
            Username
          </Label>
          <Input
            id='username'
            className='col-span-3'
            placeholder='Username...'
          />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='username' className='text-right'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            className='col-span-3'
            placeholder='Email...'
          />
        </div>
        <div className='space-y-1'>
          <Label htmlFor='username' className='text-right'>
            Phone Number
          </Label>
          <PhoneInput />
        </div>
      </div>
      <DialogFooter>
        <Button type='submit'>Proceed Checkout</Button>
      </DialogFooter>
    </DialogContent>
  );
}
