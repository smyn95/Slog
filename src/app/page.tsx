import CarouselPosts from '@/components/carouselPosts';
import FeaturedPosts from '@/components/featuredPosts';
import Profile from '@/components/pofile/Page';

export default function Home() {
    return (
        <section>
            <Profile />
            <FeaturedPosts />
            <CarouselPosts />
        </section>
    );
}
