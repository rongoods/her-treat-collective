import { defineField, defineType } from 'sanity'

export const collageLayer = defineType({
    name: 'collageLayer',
    title: 'Collage Layer',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Image', value: 'image' },
                    { title: 'Sticker', value: 'sticker' },
                    { title: 'Tape', value: 'tape' },
                    { title: 'Polaroid', value: 'polaroid' },
                    { title: 'Text', value: 'text' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => parent?.type === 'text',
        }),
        defineField({
            name: 'text',
            title: 'Text Content',
            type: 'string',
            hidden: ({ parent }) => parent?.type !== 'text',
        }),
        defineField({
            name: 'x',
            title: 'X Position (%)',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'y',
            title: 'Y Position (%)',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'rotation',
            title: 'Rotation (deg)',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'zIndex',
            title: 'Z Index',
            type: 'number',
            initialValue: 1,
        }),
        defineField({
            name: 'scale',
            title: 'Scale',
            type: 'number',
            initialValue: 1,
        }),
    ],
    preview: {
        select: {
            type: 'type',
            image: 'image',
            text: 'text',
        },
        prepare(selection) {
            const { type, image, text } = selection
            return {
                title: type === 'text' ? text : type,
                media: image,
            }
        },
    },
})
