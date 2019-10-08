export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d9d07468f8e5e2b8ca99c3f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome2-blog-studio',
                  apiId: 'ea17b254-5e7e-49e4-8ca4-1bcfc106620f'
                },
                {
                  buildHookId: '5d9d0746d1061533d29fed14',
                  title: 'Blog Website',
                  name: 'sanity-gridsome2-blog',
                  apiId: '0e37cd3d-f2e7-4800-9867-f4afd3802450'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajonp/sanity-gridsome2-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome2-blog.netlify.com', category: 'apps'}
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
