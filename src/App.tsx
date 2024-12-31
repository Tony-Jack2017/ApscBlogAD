import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router";

import "@/styles/theme/light.css"
import "@/styles/components/layout/main.scss"

function App() {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
