<template>
    <ProductCards :cardsData="listOfProducts" @click="goToDetailPage" />
</template>

<script setup lang="ts">
import { useLoadingStore } from './../../store/loading'
import type { ProductCollection, ProductData } from "./index"
const router = useRouter();
const route = useRoute();
const loadingStore = useLoadingStore();

const goToDetailPage = (cardData: Record<string, any>) => {
    router.push({ name: "products-productId", params: { productId: cardData.id } })
}


const listOfProducts = ref<ProductCollection>([]);
const fetchListOfProducts = async (category?: string) => {
    loadingStore.setLoadingTo(true)
    const productList: ProductCollection = await $fetch(`https://fakestoreapi.com/products${category ? `/category/${category}` : ''}`, {
        method: 'GET',
    })

    listOfProducts.value = [...productList]
    loadingStore.setLoadingTo(false)
}

watch(() => route.query.category, (value: string) => {
    fetchListOfProducts(value)
});

onMounted(async () => {
    await fetchListOfProducts(route.query.category);
})
</script>