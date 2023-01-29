import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
        const post=useLoaderData();
        const {id,tittle,body,userId}=post;
        const navigate=useNavigate()
        const handleNavigate=()=>{
            navigate(`/friend/${userId}`)
        }
    return (
        <div>
            <h1> post details of {id} </h1>
            <h4>{tittle} </h4>
            <p><small> {body} </small></p>
            <button onClick={handleNavigate}> Get the author </button>
        </div>
    );
};

export default PostDetails;