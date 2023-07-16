import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './postsGrid';

export default async function FeaturedPosts() {
    const posts = await getFeaturedPosts();

    return (
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}
