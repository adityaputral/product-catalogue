<template>
  <o-loading v-model:active="loading" :full-page="false" :cancelable="true">
    <o-icon pack="fa" icon="spinner" size="large" spin />
  </o-loading>
  <main role="main" v-show="!loading">
    <div class="container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useLoadingStore } from './store/loading'

const loadingStore = useLoadingStore();
const { loading } = storeToRefs(loadingStore)
</script>
