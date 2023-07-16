import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between h-16 px-5">
            <h1 className="text-4xl">
                <Link href={'/'}>Slog</Link>
            </h1>
            <nav className="flex gap-2 text-xl">
                <Link href={'/me'}>ME</Link>
                <Link href={'/posts'}>POSTS</Link>
                <Link href={'/contact'}>CONTACT</Link>
            </nav>
        </header>
    );
}
