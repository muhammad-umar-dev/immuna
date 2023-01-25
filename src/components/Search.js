import React from 'react'
import SearchIcon from '../assets/search.svg'

const Search = (props) => {
    const { width, height, setSearch } = props
    const onHandleSearch = (event) => {
        setSearch(event.target.value)
    }
    // console.log(search)
    return (
        <div className={`flex ${width} ${height} items-center px-3 py-3 rounded-full border bg-white-0 border-gray-0`} >
            <div className=''><img src={SearchIcon} alt="" />  </div>
            <input className="outline-none ml-3 w-full" type="search" placeholder="Search..." onChange={onHandleSearch} />
        </div >


    )
}

export default Search