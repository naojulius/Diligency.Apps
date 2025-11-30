import { logError, logInfo } from "../../logger";
import { seedArray } from "../helpers/seed.helper";
import data from "./article.data.json";

export default async function seed() {
    const page = "articlePage";
    try {
        await seedArray(data, page)
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${page} seed.`)
    }
}
