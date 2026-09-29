import Title from "../title/Title"
import BlogCard from "./BlogCard"

export default async function BlogComponent() {
    const postRes = await fetch('http://localhost:4000/posts', {
        next: { revalidate: 60 }
    });
    if (!postRes.ok) {
        throw new Error(`Failed to fetch posts: ${postRes.status}`);
    }
    const postData = await postRes.json();
    const posts = postData.data;

    return (
        <section className="section__posts">
            <Title
                h2="Our news"
                h3="Latest posts"
            />
            <BlogCard posts={posts} />
        </section>
    )
}
