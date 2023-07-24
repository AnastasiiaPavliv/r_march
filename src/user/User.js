import React from 'react';
import {UserDetails} from "./userDetails/UserDetails";
import {UserAddress} from "./userAddress/UserAddress";
import {Company} from "./company/Company";

const User = ({user}) => {
    const {id, name, username, email,address,company}=user
    return (
        <div style={{border:'1px solid black', margin:'5px', width:'350px'}}>
            <UserDetails data={{id, name, username, email}}/>
            <UserAddress address={address}/>
            <Company company={company}/>
        </div>
    );
};

export {User};