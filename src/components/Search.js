import React from 'react'
import SearchIcon from '../assets/search.svg'

const Search = (props) => {
    const { width, height } = props
    return (
        <div className={`flex w-[${width}] h-[${height}] items-center px-3 py-3 rounded-full border border-gray-0`} >
            <div><img src={SearchIcon} alt="" />  </div>
            <input className="ml-3" type="search" placeholder="Search..." />

        </div >


    )
}

export default Search