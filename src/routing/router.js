import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {CommentsPage} from "../Pages/CommentsPage";
import {PostsPage} from "../Pages/PostsPage";
import {CarPage} from "../Pages/CarPage";

const router=createBrowserRouter([{
    element:<MainLayout/>,
    children:[{path:"", element:<h1>Hello!</h1>},
        {
            path:'comments',
            element:<CommentsPage/>
        },{
            path:'posts',
            element:<PostsPage/>
        }, {
        path:'cars',
            element:<CarPage/>
        }]}
])
export {router}