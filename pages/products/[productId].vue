<template>
    <div class="page-navigator">
        <button class="is-light" type="button" @click="goBackToListing">Back</button>
    </div>
    <div class="article" v-show="!isFetching">
        <section class="article__image">
            <img :src="detailedData.image" alt="">
        </section>

        <section class="article__description">
            <h1 class="article__description__title">{{detailedData.title || '-'}}</h1>
            <span class="article__description__subtitle">
                <i class="fa fa-star" aria-hidden="true"></i> {{detailedData?.rating?.rate|| '-'}}
                ({{detailedData?.rating?.count|| '-'}}) · {{detailedData.category|| '-'}}
            </span>
            <p class="article__description__main">
                {{detailedData.description|| '-'}}
            </p>
            <p class="article__description__footer"><strong>$ {{detailedData.price|| '-'}}</strong></p>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { DetailData } from "./[productId]"
import { useLoadingStore } from './../../store/loading'

const router = useRouter();
const route = useRoute();
const loadingStore = useLoadingStore();


const isFetching = ref(true);

const goBackToListing = () => {
    router.push({
        name: "products"
    })
}

const detailedData = ref<DetailData>({})
const fetchDetailedData = async () => {
    const productData: DetailData = await $fetch(`https://fakestoreapi.com/products/${route.params.productId}`, {
        method: 'GET',
    })

    detailedData.value = { ...productData }
}
useHead({
    title: detailedData.value.title,
})

onMounted(async () => {
    loadingStore.setLoadingTo(true)
    await fetchDetailedData()
    loadingStore.setLoadingTo(false)

    isFetching.value = false;
})
</script>

<style lang="scss" scoped>
.page-navigator {
    margin-bottom: 30px;
    text-align: right;
}

.article {
    width: 100%;
    display: flex;
    gap: 60px;
    margin-bottom: 20px;

    @include mobile {
        flex-direction: column;
    }

    &__image {
        width: 40%;

        @include mobile {
            margin: 0 auto;
        }

        img {
            width: 100%
        }
    }

    &__description {
        &__title {
            margin-bottom: 30px;
        }

        &__subtitle {
            display: block;
            margin-bottom: 30px;
            text-transform: capitalize;
        }

        &__subtitle i.fa.fa-star:before {
            color: rgb(255, 177, 104);
        }

        &__main {
            margin-bottom: 30px;
        }
    }
}
</style>