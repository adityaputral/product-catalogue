export interface DetailData {
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