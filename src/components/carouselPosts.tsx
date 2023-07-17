import { getNoneFeaturedPosts } from '@/service/posts';
import PostCard from './postCard';
import MultiCarousel from './multiCarousel';

export default async function CarouselPosts() {
    const posts = await getNoneFeaturedPosts();
    return (
        <section className="my-4">
            <h2 className="my-2 text-2xl font-bold">게시글</h2>
            <MultiCarousel>
                {posts.map((post) => (
                    <PostCard key={post.path} post={post} />
                ))}
            </MultiCarousel>
        </section>
    );
}
