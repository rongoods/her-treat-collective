import { defineField, defineType } from 'sanity'

export const event = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'date',
            title: 'Date and Time',
            type: 'datetime',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string',
        }),
        defineField({
            name: 'shortDesc',
            title: 'Short Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'longDesc',
            title: 'Long Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'dressCode',
            title: 'Dress Code',
            type: 'string',
        }),
        defineField({
            name: 'whatToBring',
            title: 'What to Bring',
            type: 'string',
        }),
        defineField({
            name: 'collageLayers',
            title: 'Collage Header Layers',
            type: 'array',
            of: [{ type: 'collageLayer' }],
        }),
        defineField({
            name: 'galleryImages',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            date: 'date',
            media: 'collageLayers.0.image',
        },
        prepare(selection) {
            const { title, date, media } = selection
            return {
                title,
                subtitle: date && new Date(date).toLocaleDateString(),
                media,
            }
        },
    },
})
