
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/expert-chainsaw/blog',
    component: ComponentCreator('/expert-chainsaw/blog','3a5'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/archive',
    component: ComponentCreator('/expert-chainsaw/blog/archive','0d8'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/first-blog-post',
    component: ComponentCreator('/expert-chainsaw/blog/first-blog-post','2d8'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/long-blog-post',
    component: ComponentCreator('/expert-chainsaw/blog/long-blog-post','924'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/mdx-blog-post',
    component: ComponentCreator('/expert-chainsaw/blog/mdx-blog-post','d73'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/tags',
    component: ComponentCreator('/expert-chainsaw/blog/tags','3ca'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/tags/docusaurus',
    component: ComponentCreator('/expert-chainsaw/blog/tags/docusaurus','067'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/tags/facebook',
    component: ComponentCreator('/expert-chainsaw/blog/tags/facebook','3ef'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/tags/hello',
    component: ComponentCreator('/expert-chainsaw/blog/tags/hello','c7d'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/tags/hola',
    component: ComponentCreator('/expert-chainsaw/blog/tags/hola','16b'),
    exact: true
  },
  {
    path: '/expert-chainsaw/blog/welcome',
    component: ComponentCreator('/expert-chainsaw/blog/welcome','bc9'),
    exact: true
  },
  {
    path: '/expert-chainsaw/markdown-page',
    component: ComponentCreator('/expert-chainsaw/markdown-page','543'),
    exact: true
  },
  {
    path: '/expert-chainsaw/docs',
    component: ComponentCreator('/expert-chainsaw/docs','d3a'),
    routes: [
      {
        path: '/expert-chainsaw/docs/intro',
        component: ComponentCreator('/expert-chainsaw/docs/intro','4b5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-basics/congratulations','123'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-basics/create-a-blog-post','f5b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-basics/create-a-document','6b9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-basics/create-a-page','46b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-basics/deploy-your-site','820'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-basics/markdown-features','678'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-extras/manage-docs-versions','8d2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/expert-chainsaw/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/expert-chainsaw/docs/tutorial-extras/translate-your-site','962'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/expert-chainsaw/',
    component: ComponentCreator('/expert-chainsaw/','395'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
