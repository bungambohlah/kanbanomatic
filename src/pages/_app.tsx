// src/pages/_app.tsx
import { withTRPC } from '@trpc/next';
import type { AppRouter } from '../server/router';
import type { AppProps as NextAppProps } from 'next/app';
import type { Session } from 'next-auth';
import superjson from 'superjson';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

// modified version - allows for custom pageProps type, falling back to 'any'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

function MyApp({
  Component,
  pageProps,
}: AppProps<{ session?: Session | null }>) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.browser) return ''; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
