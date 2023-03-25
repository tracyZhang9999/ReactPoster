import { useState , useEffect} from 'react';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';
import classes from './PostList.module.css';
function PostList(){
    //fetch data from backend
    const posts=useLoaderData();
    
    
    //post data to the backend
    
    return (
    <>
    
    {posts.length>0 && (
        <ul className={classes.posts}>
        {posts.map((post)=><Post key={post.id} id={post.id} author={post.author} body={post.body}/>)}
        </ul>
    )}
    { posts.length===0 &&(
        <div style={{textAlign: 'center',color: 'white'}}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
        </div>
    )}
    
    </>
    );
}
export default PostList;