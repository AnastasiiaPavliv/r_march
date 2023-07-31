import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layout/MainLayout";
import {CommentsPage, NotFoundPage, PostsPage, UserIdPage, UsersPage} from "../Pages";


const router = createBrowserRouter([{
    element: <MainLayout/>,
    children:[{
        path: "", element:<div>Hello!</div>
    },{
        path:"/users",
        element:<UsersPage/>,
    children:[{
        path:'users/:userId',
        element:<UserIdPage/>
    }]
    },
    {
        path:"comments",
        element:<CommentsPage/>
     }
,{      path:"posts",
        element:<PostsPage/>}
    ]},{
    path:'*',
    element:<NotFoundPage/>
}
])


export {router}