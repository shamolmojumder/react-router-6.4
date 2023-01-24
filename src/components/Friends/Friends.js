import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends=useLoaderData();
    return (
        <div>
            <h4>I have {friends.length} friends</h4>
            {
                friends.map(friend=> <Friend friend={friend} key={friend.key}></Friend> )
            }
        </div>
    );
};

export default Friends;