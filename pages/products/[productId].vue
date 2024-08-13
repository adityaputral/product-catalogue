<template>
    <div class="article">
        <section class="article__image">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
        </section>

        <section class="article__description">
            <h1 class="article__description__title">Mens Cotton Jacket</h1>
            <span class="article__description__subtitle">
                <i class="fa fa-star" aria-hidden="true"></i> 4.7 (500) · Men's clothing
            </span>
            <p class="article__description__main">
                great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking,
                camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your
                family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day..
            </p>
            <p class="article__description__footer"><strong>$ 123</strong></p>
        </section>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.article {
    width: 100%;
    display: flex;
    gap: 60px;

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