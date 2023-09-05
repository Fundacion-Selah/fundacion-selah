import { Roboto, Source_Serif_4 } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const source_serif = Source_Serif_4({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
})