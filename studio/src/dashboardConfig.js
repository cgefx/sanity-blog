export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e79776ff33ec74e076471d9',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-hz65c1sa',
                  apiId: 'e3a6f4c8-083d-48c1-ba23-06353ae270e4'
                },
                {
                  buildHookId: '5e79776f867ac26789a26aa4',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-k4gxw5u9',
                  apiId: 'd1028716-3927-4a0b-97ac-775559ad1fc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cgefx/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-k4gxw5u9.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
