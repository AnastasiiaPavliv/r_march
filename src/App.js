import React, {useState} from 'react';
import {UserPage} from "./component/Page/userPage";
import {PostsPage} from "./component/Page/PostsPage";


const App = () => {

    return (
        <div>
            <PostsPage/>
           {/*<UserPage/>*/}
        </div>
    );
};

export {App};
