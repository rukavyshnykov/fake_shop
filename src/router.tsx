import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <Products />,
                path: '/products'
            },
            {
                element: <Cart />,
                path: '/cart'
            },
        ]
    }
])

export const Router = () => {
    return <RouterProvider router={router}/>
}