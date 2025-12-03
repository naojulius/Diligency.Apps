import { defineStore } from "pinia"
import { GET_FOUR_LAST_ARTICLE_GROQ, GET_LAST_ARTICLE_GROQ } from "~/utils/groq/articles.groq"
import { UseLoaderStore } from "../loader.store"

export const useArticleStore = defineStore("article-store", () => {
    const loader = UseLoaderStore()

    const GetFourLastArticle = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_FOUR_LAST_ARTICLE_GROQ)
            loader.HideLoader()
            return result

        } catch (err) {
            console.error("Error fetching article data:", err)
            loader.HideLoader()
        }
    }

    const GeLastArticle = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_LAST_ARTICLE_GROQ)
            loader.HideLoader()
            return result

        } catch (err) {
            console.error("Error fetching article data:", err)
            loader.HideLoader()
        }
    }

    return {
        GetFourLastArticle,
        GeLastArticle
    }
})