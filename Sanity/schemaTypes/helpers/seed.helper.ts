import { createClient } from "@sanity/client"
import { logError, logInfo, logSuccess } from "../../logger"
import { Client } from "../configs/client"
import { addKeysRecursively } from "./add-keys.helper"


export const ApplySeed = async (data: any, type: string) => {
    try {
        logInfo(`Starting dynamic seed for ${type}...`)

        const client = createClient(Client)

        for (const key of Object.keys(data)) {
            const section = (data as any)[key]

            //Add _key to every nested level
            const sectionWithKeys = addKeysRecursively(section)

            // Build Sanity document
            const doc = {
                _type: type,
                _id: key,
                ...sectionWithKeys,
            }

            const result = await client.createOrReplace(doc)
            logSuccess(`Seeded section '${key}' successfully! ID: ${result._id}`)
        }
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo(`Finished dynamic ${type} seed.`)
    }
}

export const seedApplicationDataPage = async (data: any, page: string) => {
    const client = createClient(Client);

    const doc = {
        _id: page, // unique id for the whole document
        _type: "applicationDataPage",
        applicationIntroduction: addKeysRecursively(data.applicationIntroduction),
        applicationForm: addKeysRecursively(data.applicationForm),
        applicationSuccess: addKeysRecursively(data.applicationSuccess),
        applicationError: addKeysRecursively(data.applicationError),
    };

    const result = await client.createOrReplace(doc);
    logSuccess(`Seeded 'applicationDataPage' document successfully! ID: ${result._id}`);
};