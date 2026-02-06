export interface Comment {
    id: number
    name: string
    email: string
    content: string
    postId: number
    userId: number
    createdAt?: string
    updatedAt?: string
}

export interface WriteComments {
    postId: string;
    isLoggedIn: boolean
}

export interface CommentButton {
    commentId: number
}