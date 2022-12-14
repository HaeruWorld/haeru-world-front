import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
