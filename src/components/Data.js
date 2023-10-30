import React from 'react';
import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { data } from 'autoprefixer';
import {useContext} from 'react'
import {AppContext} from '../Contexts/AppContextProvider'
import Blogdet from './Blogdet';
const Data = () => {
    const {isLoading, post, setPost} = useContext(AppContext);
    return (
        <>
            {isLoading ? (<p className='text-black text-3xl font-extrabold'> Loading......</p >) :
                (<div className='cursor-pointer'>
                    {
                        post.map((post,index) =>
                        (
                            <Blogdet key={index} post={post}/>
                        ))
                    }
                </div>)
            }
        </>
        );
}

export default Data;
