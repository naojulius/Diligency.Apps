import { createClient } from "@sanity/client"
import { randomUUID } from "crypto"
import { logError, logInfo, logSuccess } from "../../logger"
import { Client } from "../configs/client"
import { Blocktype } from "../interfaces/block"
import { LocaleType } from "../interfaces/locale"
import data from "./agency.data.json"

export default async function seed() {
    try {
        logInfo("Starting dynamic seed for agency pages...")

        const client = createClient(Client)

        // Loop through all top-level keys in JSON
        for (const key of Object.keys(data)) {
            const section = (data as any)[key]

            // Prepare hero if it exists
            let heroWithKeys
            if (section.hero) {
                heroWithKeys = {
                    ...section.hero,
                    title: section.hero.title?.map((item: LocaleType) => ({
                        ...item,
                        _key: randomUUID(),
                    })) || [],
                }
            }

            // Prepare blocks if they exist
            const blocksWithKeys = section.blocks?.map((block: Blocktype) => ({
                ...block,
                _key: randomUUID(),
                title: block.title?.map(t => ({ ...t, _key: randomUUID() })) || [],
                subtitle: block.subtitle ? { ...block.subtitle, _key: randomUUID() } : undefined,
                items: block.items?.map(item => ({
                    ...item,
                    _key: randomUUID(),
                })) || [],
            }));

            // If neither hero nor blocks, skip silently
            if (!heroWithKeys && !blocksWithKeys) continue

            // Generate a unique ID for this document
            const uid = `${key}`

            const doc = {
                _type: "agencyPage",
                _id: uid,
                ...(heroWithKeys && { hero: heroWithKeys }),
                ...(blocksWithKeys && { blocks: blocksWithKeys }),
            }

            const result = await client.createOrReplace(doc)
            logSuccess(`Seeded section '${key}' successfully! ID: ${result._id}`)
        }
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo("Finished dynamic agencyPage seed.")
    }
}
