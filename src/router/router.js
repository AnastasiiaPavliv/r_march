import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {MovieInfoPage, MoviesListPage} from "../pages";

const router=createBrowserRouter([{
    element:<MainLayout/>,
    children:[{
        path:'',element:<h2>Hello</h2>
    }, {
        path: 'page/:page', element: <MoviesListPage/>,
        children: [{
            path: 'page/:page/movie/:id', element: <MovieInfoPage/>
        }]
    }]
}])
export {router}