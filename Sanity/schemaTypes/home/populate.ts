import { createClient } from '@sanity/client'
import { HomeTextDefault } from '../../static/home-text.default'


// Sanity client configuration
const client = createClient({
    projectId: 'if67oozt', // replace with your project ID
    dataset: 'production',
    token: 'skrBdWGLmacO4KOxn0BMxNRWMe3xYmSsl9BrfMTSTSThla08NiHGRxsY9IOUIBN1yUn4UPZjbUEdADj1t8DkIjkAsrpBvvssrSPLmKe6aCIBtUq7AyHQ5DiSpRYMCdw70gMUgHHkwVztPouRa5IBg2eejn4qrV7PKMtU5Yr7wISbUMnWntpI',    // must have write access
    useCdn: false
})

// TypeScript interfaces (optional, for type safety)
interface Locale {
    en: string
    fr: string
}

interface Hero {
    title: Locale[]
    subtitle: Locale
    cta: Locale
}

interface HomePageData {
    hero: Hero
}

// Populate function
async function populateHome() {
    const data = {
        hero: {
            ...HomeTextDefault.hero
        }
    }

    try {
        await client.createOrReplace({
            _id: 'home',      // fixed ID for single home page document
            _type: 'home',
            ...data
        })

        console.log('Home page saved to Sanity successfully!')
    } catch (err) {
        console.error('Error saving Home page:', err)
    }
}

// Run the function
populateHome()
