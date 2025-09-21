import { createClient } from '@sanity/client';
import { Client } from '../configs/client';
import { data } from './data';
import { Option } from './interface';



const client = createClient(Client)
const optionId = 'option'

async function populate() {
    const setupData: Array<Option> = data

    try {
        // await client.createOrReplace({
        //     _id: optionId,
        //     _type: optionId,
        //     ...setupData
        // })
        for (const option of setupData) {
            await client.createOrReplace({
                _id: `option-${option.property}`,
                _type: 'option',
                ...option,
            });
        }
        console.log(`${optionId} page saved to Sanity successfully!`)
    } catch (err) {
        console.error(`Error saving ${optionId}:`, err)
    }
}

populate()
