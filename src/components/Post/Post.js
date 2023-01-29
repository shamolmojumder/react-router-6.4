import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id,title,body}=post;
    const navigate = useNavigate();

    const handleNavigate=()=>{
        navigate(`/posts/${id}`);
    }

    return (
        <div className='post'>
            <h1>{title}  </h1>        
            <p> {body} </p>
            <Link to={`/posts/${id}`}>Visit: of {id}</Link>
            <br />
            <Link to={`/posts/${id}`}>
                <button>Show Details of {id} </button>
            </Link>
            <br />
            <button onClick={handleNavigate}>Show details Button 2</button>
        </div>
    );
};

export default Post;