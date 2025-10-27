import { TRANSFORM_DATA } from '~/stores/helpers/transformer'
import { GET_AGENCY_GROQ } from '~/utils/groq/agency.groq'
import { SANITY_CLIENT } from '~/utils/sanity.client'

export default defineEventHandler(async () => {
    try {
        const result = await SANITY_CLIENT.fetch(GET_AGENCY_GROQ)
        const transformed = await TRANSFORM_DATA(result)
        return transformed
    } catch (err) {
        console.error('Error fetching agency pages on server:', err)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch agency data'
        })
    }
})
