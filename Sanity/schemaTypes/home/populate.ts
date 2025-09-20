import { createClient } from '@sanity/client'
import { Client } from '../client'
import { data } from './data'


const client = createClient(Client)
const optionId = 'home'

async function populate() {
    const setupData: Array<any> = data

    try {
        // await client.createOrReplace({
        //     _id: optionId,
        //     _type: optionId,
        //     ...setupData
        // })
        for (const option of setupData) {
            await client.createOrReplace({
                _id: `home-${option.property}`,
                _type: 'home',
                ...option,
            });
        }
        console.log(`${optionId} page saved to Sanity successfully!`)
    } catch (err) {
        console.error(`Error saving ${optionId}:`, err)
    }
}

populate()