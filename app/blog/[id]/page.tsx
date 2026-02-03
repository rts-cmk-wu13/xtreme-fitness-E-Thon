import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "../../_components/header/navigation/Navigation";
import Footer from "../../_components/footer/Footer";
import Comments from "./comments/Comments";
import Hero from "../../_components/header/hero/Hero";
import Header from "../../_components/header/Header";
import "./_Post.scss";

export const metadata: Metadata = {
    title: "post",
};

interface Post {
    id: number;
    title: string;
    teaser: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    asset: Asset;
    comments?: any[];
}

interface Asset {
    url: string;
    altText: string;
    width: number;
    height: number;
}

interface PageProps {
    params: {
        id: string;
    }
}

export default async function PostPage({ params }: PageProps) {
    const resolvedParams = await params;
    const postId = resolvedParams.id;

    const postRes = await fetch(`http://localhost:4000/posts/${postId}`, {
        next: { tags: ["comments"] }
    });

    if (!postRes.ok) {
        throw new Error(`Failed to fetch post: ${postRes.status}`);
    }

    const postData = await postRes.json();
    const post: Post = postData.data;
    const image: Asset = post.asset;

    // console.log("post data: ", post);

    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title={post.title}
                    backgroundColor="black"
                />
            </Header>
            <main className="main">
                <section className="blog">
                    <article className="blog__post">
                        {image && (
                            <Image
                                src={image.url}
                                alt={image.altText}
                                width={image.width}
                                height={image.height}
                                unoptimized
                                className="blog__image"
                            />
                        )}
                        <h3>{post.teaser}</h3>
                        {post.content.split('\n').map((p, index) => (
                            p ? (<p className="blog__content" key={index}>{p}</p>) : ""
                        ))}
                        <div className="blog__author">
                            <p className="blog__name">Writer: {post.author}</p>
                            <p className="blog__date">Created: {new Date(post.updatedAt).toLocaleDateString()}</p>
                        </div>
                    </article>
                    <Comments postId={postId} />
                </section>
            </main>
            <Footer />
        </>
    )
}



