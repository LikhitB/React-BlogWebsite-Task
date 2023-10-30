import Home from './pages/Home'
import { Routes, Route, useLocation, useSearchParams} from 'react-router-dom'
import Blogs from './pages/Blogs'
import Tags from './pages/Tags'
import Categories from './pages/Categories'
import { useContext,useEffect } from 'react'
import { AppContext } from './Contexts/AppContextProvider'
export default function App() {

  const { fetchData } = useContext(AppContext);
  const [param, setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    const page = param.get('page') ?? 1
    if (location.pathname.includes('tags')) {
      //now you need to find the tag which need to be fetched
      const tag = location.pathname.split('/').at(-1).replace('-', " ")
      fetchData(Number(page), null, tag)
    }
    else if (location.pathname.includes('categories')) {
      const category = location.pathname.split('/').at(-1).replace('-', " ")
      fetchData(Number(page), category)
    }
    else {
      fetchData(Number(page))
    }
  }, [location.pathname, location.search]) // render this whenever the location is chan
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog/:blog' element={<Blogs />}></Route>
        <Route path='/tags/:tag' element={<Tags />}></Route>
        <Route path='/categories/:category' element={<Categories />}></Route>
      </Routes>
    </>
  )
}
