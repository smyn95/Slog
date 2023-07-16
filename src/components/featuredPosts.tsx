import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './postsGrid';

export default async function FeaturedPosts() {
    const posts = await getFeaturedPosts();

    return (
        <section>
            <h2 className="my-2 text-2xl font-bold">최근 게시물</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}
