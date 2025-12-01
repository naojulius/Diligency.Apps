import { logError, logInfo } from "../../logger";

export default async function seed() {
    const page = "articlePage";
    try {
        //await seedArray(data, page)
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${page} seed.`)
    }
}
