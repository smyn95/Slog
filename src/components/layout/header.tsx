import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between h-16 px-5 py-4">
            <Link href={'/'}>
                <h1 className="text-4xl font-bold">Slog</h1>
            </Link>
            <nav className="flex gap-3 text-base font-bold">
                <Link href={'/me'}>ME</Link>
                <Link href={'/posts'}>POSTS</Link>
                <Link href={'/contact'}>CONTACT</Link>
            </nav>
        </header>
    );
}
