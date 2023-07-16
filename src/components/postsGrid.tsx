import { Post } from '@/service/posts';
import PostCard from './postCard';

type Props = {
    posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
                <li key={post.path} className="min-h-card">
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
}
