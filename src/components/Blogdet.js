import React from 'react';
import { NavLink } from 'react-router-dom'
const Blogdet = ({ post }) => {
    return (

        <div className='border border-red-950 rounded-2xl m-3 p-3'>

            <NavLink to={`/blog/${post.id}`} className='font-bold hover:underline'>{post.title}</NavLink>
            <div>
                By
                <span>
                    {post.author}
                    on
                    <NavLink to={`/categories/${post.category}`}>
                        <span className='font-bold text-blue-400 hover:underline'>
                            {post.category}
                        </span>
                    </NavLink>
                </span>
                <div>
                    <p>Post on {post.data}</p>
                    <p>{post.content}</p>
                </div>
                <div className='flex gap-3'>
                    {post.tags.map((tag, index) => (
                        <NavLink key={index} to={`/tags/${tag.replaceAll(' ', '-')}`}> 
                            <span className='text-blue-600 hover:underline'>
                                {tag}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogdet;
