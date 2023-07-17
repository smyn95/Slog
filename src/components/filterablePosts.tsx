'use client';

import { Post } from '@/service/posts';
import { useState } from 'react';
import PostsGrid from './postsGrid';
import Categories from './categories';

type Props = {
    posts: Post[];
    categories: string[];
};

const ALL_POSTS = '전체보기';

export default function FilterablePosts({ posts, categories }: Props) {
    const [selected, setSeleted] = useState(ALL_POSTS);
    const filtered = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);
    return (
        <section className="flex m-4">
            <PostsGrid posts={filtered} />
            <Categories categories={[ALL_POSTS, ...categories]} selected={selected} onclick={setSeleted} />
        </section>
    );
}
