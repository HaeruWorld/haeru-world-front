import { useState } from 'react';
import { Hydrate } from '@tanstack/react-query/src/Hydrate';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query/src/QueryClientProvider';
import { QueryClient } from '@tanstack/query-core';
import theme from 'styles/theme';
import Layout from '@/components/common/layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const isServer = !process.browser;

  if (process.env.NODE_ENV === 'development') {
    if (isServer) {
      (async () => {
        const { server } = await import('../src/mocks/server');
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import('../src/mocks/browser');
        worker.start();
      })();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}
