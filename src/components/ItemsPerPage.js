import React from 'react'
import downArrow from '../assets/downArrow.svg'


const ItemsPerPage = () => {

    return (
        <div className='flex w-4/5 h-9 '>
            {/* Item display per page */}
            <div className='flex items-center  w-[50%] '>
                <label className='font-display font-normal text-xs '>Show</label>
                {/* Dropdown */}
                <div className="dropdown-center ml-2 ">
                    <button type="button" className="btn btn-light flex items-center bg-white-0 border border-blue-light-0 rounded-lg" data-bs-toggle="dropdown" >
                        12 <img className='ml-2 w-2' src={downArrow} />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button className="dropdown-item" type="button">12</button></li>
                        <li><button className="dropdown-item" type="button">24</button></li>
                        <li><button className="dropdown-item" type="button">48</button></li>
                    </ul>
                </div>
                <label className='font-display font-normal text-xs ml-2 whitespace-nowrap'>results of 50 entries</label>
            </div>
        </div>

    )
}

export default ItemsPerPage