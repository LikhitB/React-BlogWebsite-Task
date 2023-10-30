import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Pagenation from '../components/Pagenation';
import { AppContext } from '../Contexts/AppContextProvider';
import Header from '../components/Header'
import { useContext } from 'react';
// import { baseUrl } from '../baseUrl';
import Blogdet from '../components/Blogdet'
import axios from 'axios'

const Blogs = () => {
    const location = useLocation()
    const navigator = useNavigate()
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const [blogs, setBlog] = useState(null)
    const { isLoading, setIsLoading } = useContext(AppContext)
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const blogId = location.pathname.split('/').at(-1)

    async function fetchRelatedBlogs() {
        setIsLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs()
        }
    }, [location.pathname])

    return (
        <div>
            <Header />
            <button onClick={() => navigator(-1)} className='border border-black rounded-2xl p-2'>Back</button>
            {
                isLoading ? (<h1>Loading</h1>) :
                    blogs ?
                        (
                            <div>
                                <Blogdet post={blogs} />
                                <h1 className='font-bold text-3xl'>Related Blogs</h1>
                                {
                                    relatedBlogs.map((post,index)=>{
                                        return <Blogdet key={index} post={post}/>
                                    })
                                }
                            </div>

                        ):<h1>No blogs Found</h1>
            }
            <Pagenation />
        </div>
    );
}

export default Blogs;

