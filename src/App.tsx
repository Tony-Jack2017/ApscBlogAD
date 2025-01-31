import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router";

import "@/styles/theme/light.css"
import "@/styles/component/layout/main.scss"
import "@/styles/component/common/common.scss"
import MainLoadingPage from "./pages/common/loading";
import { Suspense } from "react";

function App() {
  return (
    <div id="app" data-theme="light">
      <Suspense fallback={<MainLoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
