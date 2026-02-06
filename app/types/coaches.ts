import type { Asset } from "./asset"

export interface CoachCard {
    id: number
    name: string
    area: string
    createdAt: string
    asset: Asset
}