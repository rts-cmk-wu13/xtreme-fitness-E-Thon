import type { Asset } from "./asset"

export interface Excercise {
    id: number
    title: string
    teaser: string
    content: string
    createdAt: string
    updatedAt: string
    asset: Asset
}