import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend=useLoaderData()
    console.log(friend);

    return (
        <div>
            <h1>{friend.name} Detail page</h1>
            <p>call on this number:{friend.phone}</p>
        </div>
    );
};

export default FriendDetails;