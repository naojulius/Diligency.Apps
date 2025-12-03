import { createClient } from "@sanity/client";
import { logError, logInfo, logSuccess } from "../../logger";
import { Client } from "../configs/client";
import { addKeysMainRecursively, addKeysRecursively } from "./add-keys.helper";


export const ApplySeed = async (data: any, type: string) => {
    try {
        logInfo(`Starting dynamic seed for ${type}...`)

        const client = createClient(Client)

        for (const key of Object.keys(data)) {
            const section = (data as any)[key]

            //Add _key to every nested level
            const sectionWithKeys = addKeysMainRecursively(section)

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

export const ApplyHomeSeed = async (data: any, type: string) => {
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
