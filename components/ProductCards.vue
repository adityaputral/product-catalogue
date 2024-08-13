<template>
    <div class="cards">
        <template v-if="props.cardsData">
            <div class="card-container" v-for="(cardData, i) in props.cardsData" :key="i">
                <div class="card">
                    <div class="card__thumbnail">
                        <img :src="cardData.image" />
                    </div>
                    <div class="card__description">

                        <span class="card__description__subtitle"><i class="fa fa-star" aria-hidden="true"></i> {{
                        cardData.rating }}</span>
                        <h2 class="card__description__title">{{cardData.title}}</h2>
                        <p><strong>$ {{cardData.price}}</strong></p>

                        <button class="is-primary" type="button"
                            @click="() => goToDetailPage(cardData)">Details</button>
                    </div>
                </div>
            </div>
        </template>

        <p v-else>No data.</p>

    </div>
</template>

<script lang="ts" setup>
import type { CardCollection, Card } from "./ProductCards"
const props = defineProps({
    cardsData: {
        type: Array as PropType<Array<CardCollection>>,
        required: false,
    }
})
const emit = defineEmits<{
    (event: 'click', cardData: Card): void
}>();

const goToDetailPage = (cardData: Card) => {
    emit('click', cardData)
}
</script>

<style lang="scss" scoped>
.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    .card-container {
        width: 20%;
        display: block;
        flex: none;
        padding: 12px;

        @media (max-width: 768px) {
            width: 100%;
        }

        @media (min-width: 769px) {
            width: 50%;
        }

        @media (min-width: 1024px) {
            width: 20%;
        }

        .card {
            box-shadow: 0 0 15px #00000029;
            border-radius: $borderRadius;
        }

        .card__thumbnail {
            height: 200px;
            border-top-left-radius: $borderRadius;
            border-top-right-radius: $borderRadius;
        }

        .card__thumbnail img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            border-top-left-radius: $borderRadius;
            border-top-right-radius: $borderRadius;
        }

        .card__description {
            padding: 10px;
            text-align: center;
        }

        .card__description button {
            width: 100%;
            text-transform: uppercase;
        }

        .card__description span i.fa.fa-star:before {
            color: rgb(255, 177, 104);
        }

        .card__description__title {
            color: $primaryColor;
            line-height: 26px;
        }

        .card__description__subtitle {
            display: block;
            margin-top: 5px;
            margin-bottom: 15px;
        }
    }
}
</style>