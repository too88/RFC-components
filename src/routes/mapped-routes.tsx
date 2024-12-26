import React, { Suspense } from "react";
import { Spin } from "antd";
import { Route } from "react-router-dom";

interface IRouteConfig {
  path: string;
  element: React.ComponentType;
}

export const mapRoutes = (children: IRouteConfig[]) => {
  return children.map(({ path: subPath, element: SubComponent }) => (
    <Route
      key={subPath}
      path={subPath}
      element={
        <Suspense fallback={<Spin fullscreen />}>
          <SubComponent />
        </Suspense>
      }
    />
  ));
};
