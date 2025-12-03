export const UseLoaderStore = defineStore('loader-store', () => {
    const loading: Ref<Boolean> = ref(false)

    const HideLoader = () => {
        loading.value = false;
    }

    const ShowLoader = () => {
        loading.value = true;
    }

    return {
        loading,
        HideLoader,
        ShowLoader
    }
});