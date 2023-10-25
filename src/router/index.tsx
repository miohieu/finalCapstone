import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { Projectmn,Login , Register} from "pages";
import { AuthLayout } from "components";

export const router: RouteObject[] = [
    {
        path:PATH.projectmn,
        element:<Projectmn />
    },
    {
        element: <AuthLayout/>,
        children: [{
            path: PATH.login,
            element: <Login/>
        },
        {
            path: PATH.register,
            element: <Register/>
        },]
    }
]
