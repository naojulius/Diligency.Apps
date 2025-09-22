import { GraphQLClient } from 'graphql-request'

export const getSanityClient = () => {

    const config = useRuntimeConfig()
    let HOST = `https://${config.public.SanityProjectId}.api.sanity.io/v2023-08-01/graphql/${config.public.SanityProjectDataset}/default`
    let TOKEN = "skrBdWGLmacO4KOxn0BMxNRWMe3xYmSsl9BrfMTSTSThla08NiHGRxsY9IOUIBN1yUn4UPZjbUEdADj1t8DkIjkAsrpBvvssrSPLmKe6aCIBtUq7AyHQ5DiSpRYMCdw70gMUgHHkwVztPouRa5IBg2eejn4qrV7PKMtU5Yr7wISbUMnWntpI" //config.SanityProjectToken

    return new GraphQLClient(HOST, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

