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
                  buildHookId: '5d268c79d59082250afd906a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xf5cbsz2',
                  apiId: '9b48fc4b-8215-4c55-b3ef-5327497cd76b'
                },
                {
                  buildHookId: '5d268c7a8553a5386cf0ced1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pmbqdg8z',
                  apiId: 'a7e50d4a-46ff-4dea-9f58-4dde3721155a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndrewCull/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pmbqdg8z.netlify.com', category: 'apps'}
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
