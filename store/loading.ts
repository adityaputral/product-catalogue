import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
    state: () => ({
        loading: false,
    }),
    actions: {
        setLoadingTo(value: boolean) {
            this.loading = value;
        }
    }
})