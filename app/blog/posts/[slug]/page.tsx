import { getPostBySlug } from "../../../../typescript/api";
import markdownToHtml from "../../../../typescript/markdownToHtml";
import DateFormatter from "../../../../components/dateFormatter";
import Image from 'next/image'

export default async function Post({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug, ["title", "authorName", "authorPicture", "date", "coverImage", "content"]);

    const content = await markdownToHtml(post.content || "");

    return (
        <div className="container mx-auto">
            <Image
                alt={`cover image for ${post.title}`}
                src={post.coverImage}
                width={400}
                height={400}
                style={{ width: "100%" }}
                className="m-auto"
            />
            <main>
                <div className="mt-4 space-y-2">
                    <p className="font-bold text-4xl group-hover:underline">
                        {post.title}
                    </p>
                    <p className="text-xl">
                        <span className="font-normal">by </span> <span className="font-semibold">{post.authorName}</span>
                    </p>
                    <DateFormatter dateString={post.date} />
                    <hr />
                    <div className="space-10"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </main>
        </div>
    );
}