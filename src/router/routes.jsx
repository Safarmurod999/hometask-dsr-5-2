import { Route, Routes } from "react-router";
import {
  NotFound,
  Project,
  AddProject,
} from "../pages/index";
import { Layout } from "../components/Layout/index"

const adminRoutes = [
  {
    id: 0,
    path: "/admin",
    component: Project,
  },
  {
    id: 1,
    path: "/admin/users/create",
    component: AddProject,
  }
];
const RouterApp = () => {

  return (
    <>
      <Routes>
      
          {adminRoutes.map((route, index) => {
            const RouteComponent = route.component;
            return (
              <Route
                key={index}
                index={route.path == "/" && true}
                path={route.path}
                element={
                  <Layout>
                    <RouteComponent />
                  </Layout>
                }
              />
            );
          })}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
};

export default RouterApp;
