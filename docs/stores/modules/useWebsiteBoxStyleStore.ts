import { ref } from 'vue';
import { defineStore } from "pinia";

const useWebsiteBoxStyleStore = defineStore('websiteBoxStyle', () => {
    const isStyleSame = ref<boolean>(false);

    return {
        isStyleSame
    }
},
    {
        persist: true
    });


export default useWebsiteBoxStyleStore;