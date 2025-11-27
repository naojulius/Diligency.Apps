import { logError, logInfo } from "../../logger";
import { seedApplicationDataPage } from "../helpers/seed.helper";
import data from "./application.data.json";

export default async function seed() {
    const page = "applcationDataPage";
    try {
        await seedApplicationDataPage(data, page)
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${page} seed.`)
    }
}
