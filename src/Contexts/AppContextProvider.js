import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import { useLocation,useNavigate,useSearchParams } from 'react-router-dom';
export const AppContext = createContext()
const AppContextProvider = ({ children }) => {
    // const []
    const [post, setPost] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalpage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState(null)
    const [tag, setTag] = useState(null)
    //useLocation
    const location = useLocation()
    const [param, setParam] = useSearchParams()
    const navigate=useNavigate()
    const fetchData = async (page=1,category=null,tag=null) => {
        let url = `${baseUrl}?page=${page}`
        if (category) {

            url += `&category=${category}`
        }
        if (tag) {
            url += `&tag=${tag}`
        }
        setIsLoading(true);
        try {
            const response = await axios.get(url)
            setPost(response.data.posts)
            setTotalpage(response.data.totalPages)
            setPage(response.data.page)
        }
        catch (e) {
            console.log('error')
            setPost([])
            setTotalpage(null)
            setTag(null)
            setCategory(null)
            setPage(1)

        } finally {
            setIsLoading(false);
        }
    }
    function pageHandler(page) {
        navigate({search:`?page=${page}`})
        setPage(page)
        // fetchData(page)
    }
    // values 
    const value = {post, setPost, page, setPage, totalPage, setTotalpage, pageHandler, isLoading ,setIsLoading,fetchData}

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
