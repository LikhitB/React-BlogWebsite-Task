import React, { useContext } from 'react';
import { AppContext } from '../Contexts/AppContextProvider';
const Pagenation = () => {
    const { page, setPage, totalPage,  pageHandler ,isLoading} = useContext(AppContext)
    
    return (
        <div className='flex gap-3 font-bold items-center justify-center mb-4'>
            {page > 1 && !isLoading &&(
            <button className='border rounded-2xl border-black p-2' onClick={() => {
                pageHandler(page - 1)
                // setPage(page)
            }
            }>Previous
            </button>
            )}
            {page < totalPage && !isLoading && (<button className='border rounded-2xl border-black p-2' onClick={() => {
                pageHandler(page + 1)
                // setPage(page)
            }
            }
            >Next</button>)}
            {!isLoading &&
                <p className='border border-black p-2'>Page {`${page} of ${totalPage}`}</p>
            }
        </div>
    );
}

export default Pagenation;
