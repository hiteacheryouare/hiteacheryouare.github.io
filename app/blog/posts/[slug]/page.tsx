import { getPostBySlug } from "../../../../typescript/api";
import markdownToHtml from "../../../../typescript/markdownToHtml";
import Image from 'next/image'

export default async function Post({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug, ["title", "authorName", "authorPicture", "coverImage", "content"]);

    const content = await markdownToHtml(post.content || "");

    return (
        <div className="container mx-auto">
            <Image src={post.coverImage} alt={`the hero image for ${post.coverImage}`} width={"35"} height={"35"}></Image>
            <main>
                <div className="w-full h-16">
                    <p className="text-2xl">{post.title}</p>
                    <p className="text-gray-400">by {post.authorName}</p>
                    <div
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </main>
        </div>
    );
}