import { logError, logInfo } from "../../logger";

export default async function seed() {
    const page = "applcationDataPage";
    try {
        //await seedApplicationDataPage(data, page)
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${page} seed.`)
    }
}
