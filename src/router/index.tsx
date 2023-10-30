import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { Projectmn, Login, CreateProject, Register, ProjectDetail,Dashboard , NotFound} from "pages";
import { AuthLayout, MainLayout } from "components";

export const router: RouteObject[] = [
    {
        element: <AuthLayout />,
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
                index: true,
                path: PATH.projectmn,
                element: <Projectmn />,
            },
            {
                path: PATH.createProject,
                element: <CreateProject />
            },
            {
                path: PATH.projectDetail,
                element: <ProjectDetail/>
            },
            {
                path: PATH.dashboard,
                element:<Dashboard/>
            }

        ]
    },
    {
        path: "*",
        element: <NotFound/> 
    }



]
