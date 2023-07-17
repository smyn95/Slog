import FilterablePosts from '@/components/filterablePosts';
import { getAllPosts } from '@/service/posts';

export default async function Posts() {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map((post) => post.category))];

    return <FilterablePosts categories={categories} posts={posts} />;
}
