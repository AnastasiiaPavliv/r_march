import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {CarDetailsPage, CarPage} from "./pages";

const router=createBrowserRouter([
    {
      path:'',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element:<Navigate to={'cars'}/>
            },
            {
                path:'cars',
                element:<CarPage/>,
                children:[
                    {
                        path:':id',
                        element:<CarDetailsPage/>
                    }
                ]
            }
        ]
    }
    ])
export {
    router
}