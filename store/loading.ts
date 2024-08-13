import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
    state: () => ({
        loading: false,
    }),
    actions: {
        setLoadingTo(value: boolean) {
            console.log("yoo")
            this.loading = value;
        }
    }
})