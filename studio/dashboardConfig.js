export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec62062e09ff5505134a502',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s8ritt2u',
                  apiId: '82cd76fd-add2-4aa6-ad58-4b8d60b22579'
                },
                {
                  buildHookId: '5ec6206211108b4652aee97a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d28oz5m2',
                  apiId: 'e5d9c9ad-96f4-4319-a693-00a86c8ba2e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cillegio8/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d28oz5m2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
