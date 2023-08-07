import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {AlbumsPage, CommentsPage, PostPage, TodosPage} from "../pages";

const router=createBrowserRouter([{
    element:<MainLayout/>,
    children:[{path:'', element:<h1>Hello!</h1>},
        {
            path:'todos',
            element:<TodosPage/>
        },{
            path:'albums',
            element:<AlbumsPage/>
        },{
            path:'comments',
            element:<CommentsPage/>,
            children:[{path:'posts/:postId',element:<PostPage/>}]
        },
    ]
}])
export {router}