import FilterablePosts from '@/components/filterablePosts';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Posts',
    description: '모든 포스트',
};

export default async function Posts() {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map((post) => post.category))];

    return <FilterablePosts categories={categories} posts={posts} />;
}
