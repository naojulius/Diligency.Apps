import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export default defineNuxtPlugin(() => {
    const apolloClient = new ApolloClient({
        uri: 'https://if67oozt.api.sanity.io/v2023-08-01/graphql/production/default',
        cache: new InMemoryCache(),
        headers: {
            Authorization: `Bearer sk2JBBAirXF1pO4LBbk2ECWf2ZGPtOyVUxtFfvZ1waSn3jKrSzWMmLYaFHfaw69fEF1RiESVFevNKdLgrBLNbBs6BAsQp963YbSEuH7mI9aEShaf7xBBdS2Is3D4CFWptxiDImIiET3F9meSM6bCcpsuYzxpj0V0FozGoAVg2L1b5MYzsLUl`,
        },
    })

    return {
        provide: {
            apollo: apolloClient,
        },
    }
})
