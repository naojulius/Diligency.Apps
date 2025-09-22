import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

export const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://if67oozt.api.sanity.io/v2023-08-01/graphql/production/default', // your Sanity GraphQL endpoint
    }),
    cache: new InMemoryCache(),
})
