import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import Navigation from '@/app/ui/layout/Navigation';
import Header from './ui/layout/Header';
import ContactsProvider from './context/ContactsProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:bg-indigo-500 min-h-screen flex justify-center items-center`}
      >
        <div className="flex flex-col w-full max-w-[600px] sm:my-5 mt-5">
          <div className="p-5 rounded-2xl bg-white sm:mb-5 flex flex-col gap-5 lg:flex-row justify-between items-center sm:shadow-xl sm:shadow-indigo-700">
            <Header />
            <Navigation />
          </div>
          <div className="p-5 rounded-2xl bg-white sm:shadow-xl sm:shadow-indigo-700">
            <ContactsProvider>{children}</ContactsProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
