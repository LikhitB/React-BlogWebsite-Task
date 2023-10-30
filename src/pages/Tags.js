import { React } from 'react';
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Data from '../components/Data'
import Pagenation from '../components/Pagenation'
const Tags = () => {
    let nav = useNavigate()
    //Can be a trail
    let location = useLocation()
    let tag = location.pathname.split('/').at(-1)

    return (
        <div>
            <Header />
            <div className='flex gap-5 font-bold items-center'>
                <button className='border border-black rounded-2xl p-2' onClick={() => nav(-1)}>Back</button>
                <h1 className='text-2xl'>Bloggs Togged <span>{tag.replace('-'," ")}</span></h1>
            </div>
            <Data />
            <Pagenation />
        </div>
    );
}

export default Tags;
