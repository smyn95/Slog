import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '../components/layout/header';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Slog',
        template: 'Slog | %s'

    },
    description: '신미연의 블로그',
    icons:{
        icon: '/favicon.ico',
    }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={sans.className}>
            <body className="flex flex-col w-full mx-auto max-w-screen-2xl">
                <Header />
                <main className="pt-10 grow">{children}</main>
            </body>
        </html>
    );
}
