import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayot} from "./layout";
import {EpisodesPage} from "./pages/EpisodesPage/EpisodesPage";
import {CharactersPage} from "./pages/CharactersPage/CharactersPage";

const router=createBrowserRouter([
    {path:'',
        element:<MainLayot/>,
        children:[
            {index:true,
            element:<Navigate to={'episodes'}/>
            },
            {
                path:'episodes',
                element:<EpisodesPage/>
            },
            {
                path:'characters',
                element:<CharactersPage/>
            }
        ]
    }
])
export {router}