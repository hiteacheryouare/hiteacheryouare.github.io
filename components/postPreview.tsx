import DateFormatter from "./dateFormatter";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/scss/bootstrap-reboot.scss'

interface Items {
    [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
    return (
        <div className="w-full mx-auto group">
            <Link href={`/blog/posts/${post.slug}`}>
                {post?.coverImage && (
                    <Image
                        alt={`cover image for ${post.title}`}
                        src={post.coverImage}
                        width={400}
                        height={400}
                        style={{ width: "75%" }}
                    />
                )}
                <div className="mt-4 space-y-2">
                    <p className="font-bold text-xl group-hover:underline">
                        {post.title}
                    </p>
                    <p className="text-xl">
                        <span className="font-normal">by </span> <span className="font-semibold">{post.authorName}</span>
                    </p>
                    <DateFormatter dateString={post.date} />
                    <p>{post.excerpt}</p>
                </div>
            </Link>
        </div>
    );
}