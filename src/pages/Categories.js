import { React, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Data from '../components/Data'
import Header from '../components/Header'
import Pagenation from '../components/Pagenation'

const Categories = () => {
    const nav = useNavigate()
    //Can be a trail
    const location = useLocation()
    const Category = location.pathname.split('/').at(-1).replaceAll('-',' ')
    return (
        <div>
            <Header />
            <div className='flex gap-5 font-semibold items-center'>
                <button onClick={() => nav(-1)} className='border border-black rounded-2xl p-2'>Back</button>
                <h1 className='text-2xl'>Bloggs on <span>{Category}</span></h1>
            </div>
            <Data />
            <Pagenation />
        </div>
    );
}

export default Categories;
