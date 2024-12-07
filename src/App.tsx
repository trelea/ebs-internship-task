import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 2 } },
});

export default function App(): React.ReactNode {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
