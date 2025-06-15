import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";

function App() {

  const router = createBrowserRouter([
    {
      path: "/", // top-level route
      element: <AppLayout />, // wrap all children with AppLayout

      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/projects",
          element: <Projects/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])
 
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
