import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Shop from "./features/shop/Shop";
import Product from "./features/product/Product";
import Contact from "./ui/Contact";
import StayTuned from "./ui/StayTuned";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <StayTuned />,
      },
      {
        path: "/terms",
        element: <StayTuned />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
