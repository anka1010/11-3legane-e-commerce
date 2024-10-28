// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Shop from "./features/shop/Shop";
import Product from "./features/product/Product";
import Contact from "./ui/Contact";
import StayTuned from "./ui/StayTuned";
import Terms from "./ui/Terms";
import Blog from "./ui/Blog";
import Cart from "./features/cart/Cart";
import SignIn from "./features/user/SignIn";

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/*",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <StayTuned />,
      },
      {
        path: "/product",
        element: <StayTuned />,
      },
      {
        path: "/contact",
        element: <StayTuned />,
      },
      {
        path: "/privacy",
        element: <StayTuned />,
      },
      {
        path: "/terms",
        element: <StayTuned />,
      },
      {
        path: "/blog",
        element: <StayTuned />,
      },
      {
        path: "/cart",
        element: <StayTuned />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
