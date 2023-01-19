import theme from '@/MUI/Themes';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { Cookie, Inter, Righteous } from '@next/font/google';
import type { AppProps } from 'next/app';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});
const cookie = Cookie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cookie',
});
const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} ${cookie.variable} ${righteous.variable} font-inter`}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
