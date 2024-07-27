import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produto";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/produto/id/:id",
      element: <Produto />,
    },
  ]);

  return (<RouterProvider router={router} />)
}

export default App
