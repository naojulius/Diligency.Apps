import { provideApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '~/plugins/apollo.client'

export const useApollo = () => {
    provideApolloClient(apolloClient)
    return apolloClient
}
