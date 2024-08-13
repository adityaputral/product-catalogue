<template>
    <ProductCards :cardsData="listOfProducts" @click="goToDetailPage" />
</template>

<script setup lang="ts">
import type { ProductCollection, ProductData } from "./index"
const router = useRouter();

const goToDetailPage = (cardData: Record<string, any>) => {
    router.push({ name: "products-productId", params: { productId: cardData.id } })
}


const listOfProducts = ref<ProductCollection>([]);
const fetchListOfProducts = async () => {
    const productList: ProductCollection = await $fetch(`https://fakestoreapi.com/products`, {
        method: 'GET',
    })

    listOfProducts.value = { ...productList }
}

onMounted(async () => {
    await fetchListOfProducts();
})
</script>