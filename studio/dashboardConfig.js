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
                  buildHookId: '60b38951ef2afddc37a9b8ac',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-19dz4bd5',
                  apiId: 'd520258e-2294-416d-ad9c-399a2a384eb5'
                },
                {
                  buildHookId: '60b389514a73d2c5f1a8c480',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3cyzo8we',
                  apiId: 'cb2da728-8965-435d-9074-feed7d9f48d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mbenmha/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3cyzo8we.netlify.app', category: 'apps'}
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
