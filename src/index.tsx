import { Spin } from "antd";
import { Suspense } from "react";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

import "./index.css";
import RoutesConfig from "./routes/config";
import { pageOf } from "~/libs/pages.ts";
import { mapRoutes } from "./routes/mapped-routes.tsx";

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

            {mapRoutes(children)}
          </Route>
        );
      })}

      <Route path="*" element={<Navigate to={pageOf("MP-001-01").href} />} />
    </ReactRoutes>
  );
};

export default App;
