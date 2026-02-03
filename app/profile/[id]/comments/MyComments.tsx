import { cookies } from "next/headers";
import "./_MyComments.scss";
import DeleteCommentButton from "./comment-buttons/delete-comment/DeleteCommentButton";
import EditCommentButton from "./comment-buttons/edit-comment/EditCommentButton";

interface Comment {
    id: number;
    name: string;
    email: string;
    content: string;
    postId: number;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
}

export default async function MyComments() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user-id")?.value;

    if (!userId) {
        return <p>Please log in</p>;
    }

    const commentsRes = await fetch("http://localhost:4000/comments", {
        next: { tags: ["comments"] }
    });

    let userComments: Comment[] = [];

    if (commentsRes.ok) {
        const commentsData = await commentsRes.json();
        userComments = commentsData.data.filter((c: Comment) => c.userId === Number(userId)) || [];
    }

    return (
        <section className="mycomments">
            <h3>My Comments ({userComments.length})</h3>
            {userComments.length === 0 ? (
                <p>You haven't written any comments yet</p>
            ) : (
                <div className="mycomments__list">
                    {userComments.map((comment: Comment) => (
                        <article className="mycomments__item" key={comment.id}>
                            <div className="mycomments__comment">
                                <div className="mycomments__author">
                                    <h4 className="mycomments__name">{comment.name} -</h4>
                                    <p className="mycomments__date">
                                        {comment.updatedAt ? new Date(comment.updatedAt).toLocaleDateString() : comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ""}
                                    </p>
                                </div>
                                <p className="mycomments__content">{comment.content}</p>
                            </div>
                            <div className="mycomments__buttons">
                                <EditCommentButton commentId={comment.id} />
                                <DeleteCommentButton commentId={comment.id} />
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}