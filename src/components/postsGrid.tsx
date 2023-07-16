import { Post } from '@/service/posts';
import PostCard from './postCard';

type Props = {
    posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
    return (
        <ul className="grid">
            {posts.map((post) => (
                <li key={post.path}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
}
