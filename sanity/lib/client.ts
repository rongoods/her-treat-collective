import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const sanityClient = createClient({
    projectId: projectId || 'dummy-project-id',
    dataset: dataset || 'production',
    apiVersion,
    useCdn,
    perspective: 'published',
})

export const client = {
    ...sanityClient,
    fetch: async (query: string, params?: any) => {
        if (sanityClient.config().projectId === 'dummy-project-id') {
            console.warn('Using dummy project ID, returning empty array for fetch');
            return [];
        }
        return sanityClient.fetch(query, params);
    }
}
