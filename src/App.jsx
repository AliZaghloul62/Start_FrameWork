import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Erorr from "./Components/Error/Error";
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <Erorr />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Start_FrameWork/home",
          element: <Home />,
        },
        {
          path: "/Start_FrameWork/about",
          element: <About />,
        },
        {
          path: "/Start_FrameWork/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/Start_FrameWork/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Home />,
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;