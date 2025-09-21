import { GraphQLClient } from 'graphql-request'

export const getSanityClient = () => {
    const config = useRuntimeConfig()
    const HOST = `https://${config.public.SanityProjectId}.api.sanity.io/v2023-08-01/graphql/${config.public.SanityProjectDataset}/default`

    return new GraphQLClient(HOST, {
        headers: {
            Authorization: `Bearer ${config.SanityProjectToken}`
        }
    })
}

