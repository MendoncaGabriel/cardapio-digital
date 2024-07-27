import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import {useState, useEffect} from "react"

function App() {

  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
      fetch("/api/produtos")
      .then(res => res.json())
      .then(res => {
        setProdutos(res)
        console.log(res)
    })
  }, [])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={produtos} />,
    },
    {
      path: "/produto/id/:id",
      element: <Produto data={produtos} />,
    },
  ]);

  return (<RouterProvider router={router} />)
}

export default App
