import { logError, logInfo } from "../../logger";
import { ApplyHomeSeed } from "../helpers/seed.helper";
import data from "./home.data.json";


export default async function seed() {
    const page = "homePage";
    try {
        await ApplyHomeSeed(data, page)
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${page} seed.`)
    }
}
