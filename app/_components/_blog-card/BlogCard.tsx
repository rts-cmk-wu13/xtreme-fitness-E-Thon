import Image from "next/image"
import "./_BlogComponent.scss"
import Link from "next/link";

interface BlogCard {
    id: number;
    title: string;
    teaser: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    asset: Asset;
}

interface Asset {
    url: string;
    altText: string;
    width: number;
    height: number;
}


export default function BlogCard({ posts }: { posts: BlogCard[] }) {

    return (
        <section className="blog">
            {posts.map((post) => {
                return (
                    <article className="blog__card" key={post.id}>
                        <div className="blog__image">
                            <Image
                                src={post.asset.url}
                                alt={post.asset.altText}
                                width={post.asset.width}
                                height={post.asset.height}
                                unoptimized
                                className="image"
                            />
                            <p className="blog__date">
                                <span className="blog__month">{new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short' })}</span>
                                {new Date(post.updatedAt).toLocaleDateString('en-US', { day: 'numeric' })}
                                </p>
                        </div>
                        <div className="blog__text">
                            <h3 className="blog__h3">{post.title}</h3>
                            <p className="blog__teaser">{post.teaser}</p>
                            <Link href={`/blog/${post.id}`} className="button">Read more</Link>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}