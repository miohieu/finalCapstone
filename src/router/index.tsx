import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { Projectmn,Login,CreateProject , Register} from "pages";
import { AuthLayout,MainLayout } from "components";

export const router: RouteObject[] = [
    {
        path:PATH.projectmn,
        element:<Projectmn />
    },
    {
        element: <AuthLayout/>,
        children: [{
            path: PATH.login,
            element: <Login />
        },
        {
            path: PATH.register,
            element: <Register />
        }]

    },
    {
        element: <MainLayout />,
        children: [
            {
                path: PATH.createProject,
                element: <CreateProject />
            },
            {
                path: PATH.projectDetail,
            },
            {
                index: true,
                path: PATH.home
            }
        ]
    }


]
