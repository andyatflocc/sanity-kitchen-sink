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
                  buildHookId: '5ff6ece10f0cb9c9b727c196',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rx1ydhme',
                  apiId: '80711f82-22c1-40f1-8b5b-96738b6f8c22'
                },
                {
                  buildHookId: '5ff6ece20f0cb9cb8927c34b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g7k9jafe',
                  apiId: '81a93c05-69aa-479a-93be-8bedbec09066'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyatflocc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g7k9jafe.netlify.app', category: 'apps'}
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
