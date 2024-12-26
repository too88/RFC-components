import { lazy, LazyExoticComponent } from "react";

interface IRoute {
  path: string;
  element: LazyExoticComponent<React.ComponentType<any>>;
  children?: IRoute[];
  index?: boolean;
}

const CommonLayout = lazy(() => import("~/layouts/common"));
const Marketplace = lazy(() => import("~/pages/marketplace"));

const RoutesConfig: IRoute[] = [
  {
    path: "/",
    element: CommonLayout,
    children: [
      {
        path: "marketplace",
        element: Marketplace,
      },
    ],
  },
];

export default RoutesConfig;
