import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export default defineNuxtPlugin(() => {
    const apolloClient = new ApolloClient({
        uri: 'https://if67oozt.api.sanity.io/v2023-08-01/graphql/production/default',
        cache: new InMemoryCache(),
        headers: {
            Authorization: `Bearer skrBdWGLmacO4KOxn0BMxNRWMe3xYmSsl9BrfMTSTSThla08NiHGRxsY9IOUIBN1yUn4UPZjbUEdADj1t8DkIjkAsrpBvvssrSPLmKe6aCIBtUq7AyHQ5DiSpRYMCdw70gMUgHHkwVztPouRa5IBg2eejn4qrV7PKMtU5Yr7wISbUMnWntpI`,
        },
    })

    return {
        provide: {
            apollo: apolloClient,
        },
    }
})
