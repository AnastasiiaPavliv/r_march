import {createBrowserRouter} from "react-router-dom";
import {CommentPage, PostPage, UserPage} from "../Pages";
import {MainLayout} from "../layout/MainLayout";


const router=createBrowserRouter([{
    element:<MainLayout/>,
    children:[{path:"", element:<h1>Hello!</h1>},
        {
        path:'/users',
            element:<UserPage/>
    },{
        path:'/posts',
            element:<PostPage/>
    },{
        path:'/comments',
            element:<CommentPage/>,children:[{
                path:'posts/:postId',
                element:<PostPage/>
            }]
    }
    ]
}])

export {router}