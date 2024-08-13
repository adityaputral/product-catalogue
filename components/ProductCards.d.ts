export interface Card {
    id: string,
    title: string,
    image: string,
    rating: string | number,
    price: string
}

export type CardCollection = Card[]