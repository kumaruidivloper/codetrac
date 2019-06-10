import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'components1.sidebar.dashboard',
    icon: 'icon-dashboard_icon',
    class: 'nav-item',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: []
  },
  {
    path: '',
    title: 'components1.sidebar.Courses',
    icon: 'icon-courses_icon',
    class: 'nav-item has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: [
      {
        path: '/course/courselist',
        title: 'components1.sidebar.course_list',
        icon: '',
        class: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'components1.sidebar.user_manage',
    icon: 'icon-profile_icon_black',
    class: 'nav-item has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: [
      {
        path: '/manage/batch',
        title: 'components1.sidebar.batch_manage',
        icon: '',
        class: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      },
      {
        path: '/manage/users',
        title: 'components1.sidebar.users_manage',
        icon: '',
        class: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      }
      // },
      // {
      //   path: '/manage/managepermissions',
      //   title: 'components1.sidebar.permission_manage',
      //   icon: '',
      //   class: 'menu-item',
      //   badge: '',
      //   badgeClass: '',
      //   isExternalLink: false,
      //   isNavHeader: false,
      //   submenu: []
      // }
    ]
  },
  {
    path: '',
    title: 'components1.sidebar.org_manage',
    icon: 'icon-institute_icon',
    class: 'nav-item has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: [
      {
        path: '/organization/orglist',
        title: 'components1.sidebar.manage_org',
        icon: '',
        class: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      },
      {
        path: '/organization/createorg',
        title: 'components1.sidebar.create_org',
        icon: '',
        class: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      }
    ]
  }
];


export const ROUTES_LEARNER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'components1.sidebar.dashboard',
    icon: 'icon-dashboard_icon',
    class: 'nav-item',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: []
  },
  {
    path: '',
    title: 'components1.sidebar.Courses',
    icon: 'icon-courses_icon',
    class: 'nav-item has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: [
      {
        path: '/course/courselist-learner',
        title: 'components1.sidebar.course_list_learner',
        icon: '',
        class: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      }
    ]
  },
];


