import { logError, logInfo } from "../../logger";
import { ApplySeed } from "../helpers/seed.helper";
import data from "./menu.data.json";


export default async function seed() {
    const page = "menuPage";
    try {
        await ApplySeed(data, page)
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${page} seed.`)
    }
}
