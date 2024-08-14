<template>
    <Header :title="'Products'" :navigations="navigations" />
    <slot></slot>
</template>

<script setup lang="ts">
const fetchCategories = async () => {
    const categories: string[] = await $fetch(`https://fakestoreapi.com/products/categories`, {
        method: 'GET',
    })

    navigations.value = categories.map(category => ({ title: category, path: `/products?category=${category}` }))
}

const navigations = ref([])

onMounted(() => {
    fetchCategories()
})
</script>