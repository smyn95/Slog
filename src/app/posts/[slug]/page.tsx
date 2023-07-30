import AdjacentPostCard from '@/components/adjacentPostCard';
import PostContent from '@/components/postContent';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
    params: {
        slug: string;
    };
};
export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
    const {title, description} = await getPostData(slug);
    return {
        title,
        description,
    };
}

export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostData(slug);
    const { title, path, next, prev } = post;
    return (
        <article className="m-4 overflow-hidden bg-gray-100 shadow-lg rounded-2xl">
            <Image
                src={`/image/posts/${path}.png`}
                className="w-full h-1/5 max-h-[500px] object-fill"
                alt={title}
                width="760"
                height="420"
            />
            <PostContent post={post} />
            <section className="flex shadow-md">
                {prev && <AdjacentPostCard post={prev} type="prev" />}
                {next && <AdjacentPostCard post={next} type="next" />}
            </section>
        </article>
    );
}
