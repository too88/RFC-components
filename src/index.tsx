import { Spin } from "antd";
import { Suspense } from "react";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

import RoutesConfig from "./routes/config";
import { pageOf } from "~/libs/pages.ts";

const App = () => {
  return (
    <ReactRoutes>
      {RoutesConfig.map(({ element: Component, children = [], path }) => {
        return (
          <Route
            key={path}
            element={
              <Suspense fallback={<Spin fullscreen />}>
                {<Component />}
              </Suspense>
            }
            path={path}
          >
            <Route
              index
              element={<Navigate to={pageOf("MP-001-01").href} replace />}
            />

            {children.map(({ path: subPath, element: SubComponent }) => {
              return (
                <Route
                  key={subPath}
                  path={subPath}
                  element={
                    <Suspense fallback={<Spin fullscreen />}>
                      {<SubComponent />}
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        );
      })}

      <Route path="*" element={<Navigate to={pageOf("MP-001-01").href} />} />

    </ReactRoutes>
  );
};

export default App;
