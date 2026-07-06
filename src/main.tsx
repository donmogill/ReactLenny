import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './main/App.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './main/App.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);

