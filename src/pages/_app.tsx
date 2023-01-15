import '@/styles/globals.css';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

const inter = Inter({subsets: ['latin'], weight: "400"})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      
        <Component {...pageProps} />
    </main>
  );
}
