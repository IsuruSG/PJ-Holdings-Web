import theme from '@/MUI/Themes';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'], weight: '400' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
