import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home/Home";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Products from "../pages/products/Products";
import Categories from "../pages/categories/Categories";
import Custom from "../pages/custom/Custom";
import Blog from "../pages/blog/Blog";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/cart/Checkout";
import Success from "../pages/success/Success";
import PrivateRoute from "./PrivateRoute";
import SingleProduct from "../pages/products/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/custom",
        element: <Custom />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
