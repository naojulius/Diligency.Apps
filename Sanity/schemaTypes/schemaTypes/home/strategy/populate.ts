import { createClient } from '@sanity/client';
import { Client } from '../../../configs/client';
import { data } from './data';

const client = createClient(Client)
const optionId = 'strategy'

async function populate() {
    const setupData = data;

    try {
        // Boucle sur chaque option dans les données
        for (const option of setupData) {
            await client.createOrReplace({
                _id: `home-${optionId}`, // Utilisation de `home-` + le nom de la propriété
                _type: 'home', // Type du document à créer
                ...option, // Ajoute les données dans le format attendu par le schéma
            });
        }
        console.log(`${optionId} page saved to Sanity successfully!`);
    } catch (err) {
        console.error(`Error saving ${optionId}:`, err);
    }
}

populate();
