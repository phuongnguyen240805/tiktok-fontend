import { BrowserRouter, Route, Routes } from "react-router";
import { publicRoutes } from "./routes";
import DefaultLayout from "~/layouts";
import { Fragment } from "react";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component

              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }

              return (
                <Route key={index} path={route.path} element={
                  <Layout><Page /></Layout>
                }
                />
              )
            })
          }
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
