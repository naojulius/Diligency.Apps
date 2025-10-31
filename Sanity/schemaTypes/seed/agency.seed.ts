import { logError, logInfo } from "../../logger";
import { ApplySeed } from "../helpers/seed.helper";
import data from "./agency.data.json";

export default async function seed() {
    const page = "agencyPage";
    try {
        await ApplySeed(data, page)
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${page} seed.`)
    }
}
