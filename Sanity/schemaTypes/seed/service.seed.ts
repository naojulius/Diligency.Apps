import { createClient } from "@sanity/client"
import { randomUUID } from "crypto"
import { logError, logInfo, logSuccess } from "../../logger"
import { Client } from "../configs/client"
import { BlockType } from "../interfaces/block"
import data from "./service.data.json"

export default async function seed() {
    try {
        logInfo("Starting dynamic seed for service pages...")

        const client = createClient(Client)

        // Loop through all top-level keys in JSON
        for (const key of Object.keys(data)) {
            const section = (data as any)[key]

            // ✅ Helper: Add _key to array items recursively
            const addKeysToArray = (arr: any[] = []) =>
                arr.map((item) => ({
                    ...item,
                    _key: item._key || randomUUID(),
                }))

            // ✅ HERO
            const heroWithKeys = section.hero
                ? {
                    ...section.hero,
                    title: addKeysToArray(section.hero.title),
                    cta: addKeysToArray(
                        section.hero.cta?.map((ctaItem: any) => ({
                            ...ctaItem,
                            text: ctaItem.text
                                ? { ...ctaItem.text, _key: randomUUID() }
                                : undefined,
                        }))
                    ),
                }
                : undefined

            // ✅ BLOCKS
            const blocksWithKeys = section.blocks
                ? section.blocks.map((block: BlockType) => ({
                    ...block,
                    _key: randomUUID(),
                    title: addKeysToArray(block.title),
                    subtitle: block.subtitle
                        ? { ...block.subtitle, _key: randomUUID() }
                        : undefined,
                    items: addKeysToArray(block.items),
                    cta: addKeysToArray(
                        block.cta?.map((ctaItem: any) => ({
                            ...ctaItem,
                            text: ctaItem.text
                                ? { ...ctaItem.text, _key: randomUUID() }
                                : undefined,
                        }))
                    ),
                }))
                : undefined

            // ✅ FOOTER
            const footerWithKeys = section.footer
                ? {
                    ...section.footer,
                    _key: randomUUID(),
                    text: section.footer.text
                        ? { ...section.footer.text, _key: randomUUID() }
                        : undefined,
                    cta: addKeysToArray(
                        section.footer.cta?.map((ctaItem: any) => ({
                            ...ctaItem,
                            text: ctaItem.text
                                ? { ...ctaItem.text, _key: randomUUID() }
                                : undefined,
                        }))
                    ),
                }
                : undefined

            // If neither hero nor blocks, skip silently
            if (!heroWithKeys && !blocksWithKeys && !footerWithKeys) continue

            // Generate a unique ID for this document
            const uid = `${key}`

            const doc = {
                _type: "servicePage",
                _id: uid,
                ...(heroWithKeys && { hero: heroWithKeys }),
                ...(blocksWithKeys && { blocks: blocksWithKeys }),
                ...(footerWithKeys && { footer: footerWithKeys }),
            }

            const result = await client.createOrReplace(doc)
            logSuccess(`Seeded section '${key}' successfully! ID: ${result._id}`)
        }
    } catch (err: unknown) {
        if (err instanceof Error) logError(err)
        else logError(String(err))
    } finally {
        logInfo("Finished dynamic servicePage seed.")
    }
}
