import {validation} from 'sanity'

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your project',
      options: {
        source: 'title',
      },
    },
    {
      name: 'tools',
      type: 'array',
      title: 'Tools',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['https', 'http', 'mailto'],
        }),
      of: [
        {
          type: 'url',
        },
      ],
    },
    {
      name: 'demo',
      title: 'Demo',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['https', 'http', 'mailto'],
        }),
      of: [
        {
          type: 'url',
        },
      ],
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
