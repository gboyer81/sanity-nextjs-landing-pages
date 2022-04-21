export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6261e9add8391c6a9d26559e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y2q9b76x',
                  apiId: 'f3dab1a6-941d-4731-9210-97cd5314bcb2'
                },
                {
                  buildHookId: '6261e9aea81b456cfd85d2ac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g27wjqb3',
                  apiId: '9d50b36e-df28-4c8d-8a7e-75c7e136daf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gboyer81/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g27wjqb3.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
