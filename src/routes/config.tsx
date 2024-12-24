import { lazy, LazyExoticComponent } from 'react'

const CommonLayout = lazy(() => import('~/layouts/common'))
const Marketplace = lazy(() => import('~/pages/marketplace'))

interface Route {
  index?: boolean
  children?: Route[]
  element: LazyExoticComponent<React.ComponentType<any>>
  path: string
}

const RoutesConfig: Route[] = [
  {
    path: '/',
    element: CommonLayout,
    children: [
      {
        path: 'marketplace',
        element: Marketplace
      }
    ]
  }
]

export default RoutesConfig
