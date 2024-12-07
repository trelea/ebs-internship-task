import { Link } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogFooter,
} from './ui/alert-dialog';
import { Button } from './ui/button';

export default function ErrorDialog() {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Oops! Something went wrong.</AlertDialogTitle>
          <AlertDialogDescription>
            We couldn't fetch the data right now. Please try again in a moment.
            If the problem persists, feel free to contact support.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Link to={'/'}>
            <Button variant={'outline'}>Go Home</Button>
          </Link>
          <Button onClick={() => window.location.reload()}>Retry...</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
