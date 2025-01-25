import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router";

import "@/styles/theme/light.css"
import "@/styles/component/layout/main.scss"

function App() {
  return (
    <div id="app" data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
