import { type SchemaTypeDefinition } from 'sanity'
import { event } from './event'
import { collageLayer } from './collageLayer'
import { blockContent } from './blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [event, collageLayer, blockContent],
}
