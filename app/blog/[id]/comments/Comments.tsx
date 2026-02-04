import { cookies } from "next/headers";
import "./_Comments.scss";
import WriteComment from "./write-comment/WriteComment";

interface Comment {
    id: number;
    name: string;
    email: string;
    content: string;
    postId: number;
    userId: number;
    createdAt?: string;
}

interface CommentsProps {
    postId: string;
}

export default async function Comments({ postId }: CommentsProps) {
    let comments: Comment[] = [];

    const commentsRes = await fetch(`http://localhost:4000/comments`, {
        next: { tags: [`comments-${postId}`] }
    });

    if (commentsRes.ok) {
        const commentsData = await commentsRes.json();
        comments = commentsData.data.filter((c: Comment) => c.postId === Number(postId)) || [];
    }

    // Check if logged in
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const isLoggedIn = !!token;

    return (
        <section className="comments">
            <h3>{comments.length} comments</h3>
            {comments.length === 0 ? (
                <p className="comments__none">No comments has been written for this blog post yet.</p>
            ) : (
                <div className="comments__list">
                    {comments.map((comment) => (
                        <article className="comments__item" key={comment.id}>
                            <div className="comments__author">
                                <h4 className="comments__name">{comment.name} -</h4>
                                <p className="comments__date">{comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ""}
                                </p>
                            </div>
                            <p className="comments__content">{comment.content}</p>
                        </article>
                    ))}
                </div>
            )}
            <WriteComment postId={postId} isLoggedIn={isLoggedIn} />
        </section>
    )
}