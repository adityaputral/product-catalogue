export interface ProductData {
    id: string,
    title: string,
    image: string,
    rating: {
        rate: number | string,
        count: number | string
    },
    category: string
    price: string
}

export type ProductCollection = ProductData[]