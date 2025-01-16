import Add from "../pages/Add"
import Home from "../pages/home"
import Products from "../pages/products"
import UserRoot from "../pages/UserRoot"



const Routes = [
    {
        path: "/",
        element: <UserRoot/>,
        children: [
            {
                path: "/home",
                element: <Home/>,

            },
            {
                path: "/products",
                element: <Products/>,

            },
            {
                path: "/add",
                element: <Add />,
            }
        ]
    }
]
export default Routes