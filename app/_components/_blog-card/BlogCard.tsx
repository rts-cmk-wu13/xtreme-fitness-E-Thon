import Image from "next/image"
import "./_BlogCard.scss"
import Link from "next/link";

interface Posts {
    id: number;
    title: string;
    author: string;
    content: string;
    assetId: number;
    updatedAt: string;
    createdAt: string;
    image: string;
}
interface BlogExampleProps {
    posts: Posts[];
    assets: Record<number, { url: string, altText: string, width: number, height: number }>
}
console.log
// function to make the post an excert:
function excertContent(content: string, maxLength: number) {
    if (content.length > maxLength) {
        return content.substring(0, maxLength) + "...";
    }
    return content;
}

export default async function BlogExample({ posts, assets }: BlogExampleProps) {
    return (
        <section className="example">
            {posts.map((post) => {
                const asset = assets[post.assetId];
                return (
                    <article className="example__post" key={post.id}>
                        {asset && (
                            <Image
                                src={asset.url}
                                alt={asset.altText}
                                width={asset.width}
                                height={asset.height}
                                unoptimized
                                className="example__image"
                            />
                        )}
                        <div className="example__text">
                            <h3 className="example__h3">{post.title}</h3>
                            <p className="example__author">BY: {post.author} / 3 comments / {new Date(post.updatedAt).toLocaleDateString()}</p>
                            <p className="example__content">{excertContent(post.content, 400)}</p>
                            <Link href="/blog/[id]" className="button">Read more</Link>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}