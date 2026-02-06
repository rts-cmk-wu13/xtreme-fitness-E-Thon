import type { Asset } from "./asset"

export interface AbonnementCard {
    id: number
    title: string
    price: number
    content: string
    createdAt: string
    asset: Asset
    advantages: Advantages[]
}

interface Advantages { description: String }