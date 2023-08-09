import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {MovieInfoPage, MoviesListPage} from "../pages";

const router=createBrowserRouter([{
    element:<MainLayout/>,
    children:[{
        path:'',element:<h1>Hello</h1>
    }, {
        path: 'page/:page', element: <MoviesListPage/>},
        {
            path: 'movie/:id', element:  <MovieInfoPage/>
        }
    ]
}])
export {router}