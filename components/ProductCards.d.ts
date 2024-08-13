export interface Card {
    id: string,
    title: string,
    image: string,
    rating: {
        rate: number | string,
        count: number | string
    },
    price: string
}

export type CardCollection = Card[]