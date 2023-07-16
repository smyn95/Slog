import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    post: Post;
};

export default function PostCard({ post: { title, description, category, date, path } }: Props) {
    return (
        <Link href={`/posts/${path}`} className="grid h-full">
            <article className="flex flex-col overflow-hidden rounded-md shadow-lg">
                <Image src={`/image/posts/${path}.png`} alt={title} width={300} height={160} className="w-full" />
                <div className="flex flex-col justify-between h-full p-4">
                    <div>
                        <h3 className="pb-2 text-lg font-bold">{title}</h3>
                        <p className="w-full h-16 text-sm truncate">{description}</p>
                    </div>
                    <time className="self-end pt-3 text-xs font-bol">{date.toString()}</time>
                </div>
            </article>
        </Link>
    );
}
