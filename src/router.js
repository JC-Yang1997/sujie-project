import Basic from './views/Basic'
import ChangeParams from './views/ChangeParams'
import Dashboard from './views/Dashboard'
import Detail from './views/Detail'
import Result from './views/Result'

export default [
  {
    path: '/',
    breadcrumbName: '首页',
    component: Basic,
    exact: true
  },
  {
    path: '/dashboard',
    breadcrumbName: '总览',
    component: Dashboard,
    children: []
  },
  {
    path: '/basic',
    breadcrumbName: '基本情况',
    component: Basic,
    children: []
  },
  {
    path: '/detail',
    breadcrumbName: '详情页面',
    component: Detail,
    children: []
  },
  {
    path: '/result',
    breadcrumbName: '结果页面',
    component: Result,
    children: []
  },
  {
    path: '/change',
    breadcrumbName: '参数修改',
    component: ChangeParams,
    children: []
  },
]