<template>
    <header>
        <nav>
            <div class="navigation__logo">
                <h1 @click="router.push('/')">{{props.title}}</h1>
            </div>
            <div class="navigation__links">
                <ul>
                    <li v-for="(navigation, i) in props.navigations">
                        <NuxtLink :to="navigation.path">{{navigation.title}}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
</template>

<script lang="ts" setup>
import type { NavigationCollection } from "./Header";
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    navigations: {
        type: Array as PropType<Array<NavigationCollection>>,
        required: false,
    }
})

const router = useRouter();
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .navigation__logo {
        cursor: pointer;

        h1 {
            margin-bottom: 30px;
        }
    }

    .navigation__links ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        text-transform: capitalize;
    }
}
</style>