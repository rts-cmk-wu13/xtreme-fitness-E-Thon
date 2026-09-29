import Title from "../title/Title"
import BlogCard from "./BlogCard"

export default async function BlogComponent() {
    let posts = [];
    try {
        const postRes = await fetch('http://localhost:4000/posts', {
            next: { revalidate: 60 }
        });
        if (!postRes.ok) {
            throw new Error(`Failed to fetch posts: ${postRes.status}`);
        }
        const postData = await postRes.json();
        posts = postData.data;
    } catch (error) {
        // API may be unavailable (e.g. during build); render section without posts
        console.error("Could not fetch posts:", error);
    }

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
