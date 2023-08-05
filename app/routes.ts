import {Route} from '@tinijs/router';

export default [
  {
    path: '',
    component: 'app-layout-default',
    children: [
      {
        path: '',
        component: 'app-page-home',
        action: () => import('./pages/home'),
      },
      {
        path: 'get-started',
        component: 'app-page-get-started',
        action: () => import('./pages/get-started'),
      },
      // components
      {
        path: 'components/base',
        component: 'app-page-components-base',
        action: () => import('./pages/components/base'),
      },
      {
        path: 'components/text',
        component: 'app-page-components-text',
        action: () => import('./pages/components/text'),
      },
      {
        path: 'components/box',
        component: 'app-page-components-box',
        action: () => import('./pages/components/box'),
      },
      {
        path: 'components/button',
        component: 'app-page-components-button',
        action: () => import('./pages/components/button'),
      },
      {
        path: 'components/link',
        component: 'app-page-components-link',
        action: () => import('./pages/components/link'),
      },
      {
        path: 'components/icon',
        component: 'app-page-components-icon',
        action: () => import('./pages/components/icon'),
      },
      // icons
      {
        path: 'icons/bootstrap',
        component: 'app-page-icons-bootstrap',
        action: () => import('./pages/icons/bootstrap'),
      },
      {
        path: 'icons/material-filled',
        component: 'app-page-icons-material-filled',
        action: () => import('./pages/icons/material-filled'),
      },
      {
        path: 'icons/material-outlined',
        component: 'app-page-icons-material-outlined',
        action: () => import('./pages/icons/material-outlined'),
      },
      {
        path: 'icons/material-round',
        component: 'app-page-icons-material-round',
        action: () => import('./pages/icons/material-round'),
      },
      {
        path: 'icons/material-sharp',
        component: 'app-page-icons-material-sharp',
        action: () => import('./pages/icons/material-sharp'),
      },
      {
        path: 'icons/material-two-tone',
        component: 'app-page-icons-material-two-tone',
        action: () => import('./pages/icons/material-two-tone'),
      },
      {
        path: 'icons/mdi',
        component: 'app-page-icons-mdi',
        action: () => import('./pages/icons/mdi'),
      },
      {
        path: 'icons/ionic',
        component: 'app-page-icons-ionic',
        action: () => import('./pages/icons/ionic'),
      },
      {
        path: 'icons/fluent',
        component: 'app-page-icons-fluent',
        action: () => import('./pages/icons/fluent'),
      },
      {
        path: 'icons/ant-filled',
        component: 'app-page-icons-ant-filled',
        action: () => import('./pages/icons/ant-filled'),
      },
      {
        path: 'icons/ant-outlined',
        component: 'app-page-icons-ant-outlined',
        action: () => import('./pages/icons/ant-outlined'),
      },
      {
        path: 'icons/ant-twotone',
        component: 'app-page-icons-ant-twotone',
        action: () => import('./pages/icons/ant-twotone'),
      },
      {
        path: 'icons/fontawesome-brands',
        component: 'app-page-icons-fontawesome-brands',
        action: () => import('./pages/icons/fontawesome-brands'),
      },
      {
        path: 'icons/fontawesome-regular',
        component: 'app-page-icons-fontawesome-regular',
        action: () => import('./pages/icons/fontawesome-regular'),
      },
      {
        path: 'icons/fontawesome-solid',
        component: 'app-page-icons-fontawesome-solid',
        action: () => import('./pages/icons/fontawesome-solid'),
      },
      // 404
      {
        path: '**',
        component: 'app-page-404',
        action: () => import('./pages/404'),
      },
    ],
  },
] as Route[];
