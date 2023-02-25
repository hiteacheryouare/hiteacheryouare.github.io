import { getAllPosts } from "../../typescript/api";
import PostPreview from "../../components/postPreview";
import PostHero from "../../components/postHero";
import Link from "next/link";

export default function Blog() {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "authorName", "slug"]);
    const recentPosts = posts.slice(0, 2);

    return (
        <div className="container mx-auto px-5">
            <main>
                <div className="space-y-4">
                    <h1 className="text-center text-5xl font-bold">Ryan Mullin&apos;s Blog</h1>
                    <p className="text-center text-xl">
                        A wonderful collection of my thoughts and feelings
                    </p>
                </div>

                <div className="h-12"></div>

                <PostHero />

                <div className="h-16"></div>

                <p className="text-3xl mb-6">Recent Posts</p>
                <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
                    {recentPosts.map((post) => (
                        <div key={post.title}>
                            <PostPreview key={post.title} post={post} />
                        </div>
                    ))}
                </div>
                <div className="h-16"></div>
                <Link
                    href="/blog/posts/"
                    className="text-3xl hover:text-gray-300 hover:underline"
                >
                    Read More{" -> "}
                </Link>
            </main>
        </div>
    );
}