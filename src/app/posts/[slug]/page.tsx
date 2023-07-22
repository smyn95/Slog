import PostContent from '@/components/postContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostData(slug);
    const { title, path } = post;
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
        </article>
    );
}
