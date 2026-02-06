import type { Asset } from "./asset"

export interface Post {
    id: number
    title: string
    teaser: string
    content: string
    author: string
    createdAt: string
    updatedAt: string
    asset: Asset
    comments?: any[]
}